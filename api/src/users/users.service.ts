import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ListFilter } from './entities/filters.entity';
import { User } from './entities/user.entity';
import * as crypto from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const loginUsers = await this.findAll({ login: createUserDto.login });
    if (loginUsers.length > 0) {
      throw new ConflictException('existing login');
    }
    const emailUser = await this.usersRepository.findOneBy({
      email: createUserDto.email,
    });
    if (emailUser != null) {
      throw new ConflictException('existing email');
    }
    // hash password with crypto
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
      .pbkdf2Sync(createUserDto.password, salt, 1000, 64, 'sha512')
      .toString('hex');
    createUserDto.password = hash;
    createUserDto.salt = salt;

    return this.usersRepository.save({
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  findAll(filter: ListFilter): Promise<User[]> {
    return this.usersRepository.findBy(filter);
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneById(id);
    if (user == null) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async findByLogin(login: string, password: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({
      login,
      password,
    });
    if (user == null) {
      throw new UnauthorizedException('wrong login or password');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
    const result = await this.usersRepository.update(id, {
      ...updateUserDto,
      updatedAt: new Date(),
    });
    if (result.affected == 0) {
      throw new NotFoundException('user not found');
    }
  }

  async remove(id: number): Promise<void> {
    const result = await this.usersRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException('user not found');
    }
  }
}
