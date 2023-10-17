import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByLogin(username, pass);

    if (!user) {
      throw new UnauthorizedException('User not found (CHANGER EN PROD)');
    }

    const hash = crypto
      .pbkdf2Sync(pass, user.salt, 1000, 64, 'sha512')
      .toString('hex');

    if (user.password !== hash) {
      throw new UnauthorizedException('Wrong password (CHANGER EN PROD)');
    }

    return user;
  }
}
