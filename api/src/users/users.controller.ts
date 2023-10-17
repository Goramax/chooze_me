import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { BasicAuthGuard } from './auth/basic-auth.guard';

@Controller('users')
@ApiTags('users')
@UseGuards(BasicAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UserDto,
  })
  @ApiConflictResponse({
    description: 'Existing login or email',
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    const user = await this.usersService.create(createUserDto);
    return new UserDto(user);
  }

  @Get()
  @ApiQuery({
    name: 'login',
    required: false,
  })
  @ApiQuery({
    name: 'email',
    required: false,
  })
  @ApiOkResponse({
    description: 'List of users',
    type: [UserDto],
  })
  async findAll(
    @Query('login') login?: string,
    @Query('email') email?: string,
  ): Promise<UserDto[]> {
    console.log({ login, email });
    const users = await this.usersService.findAll({
      login,
      email,
    });
    return users.map((user) => new UserDto(user));
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The user',
    type: UserDto,
  })
  @ApiNotFoundResponse({
    description: 'User not found',
  })
  async findOne(@Param('id') id: string): Promise<UserDto> {
    const user = await this.usersService.findOne(+id);
    return new UserDto(user);
  }

  @Patch(':id')
  @ApiNoContentResponse({
    description: 'Successful update',
  })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<void> {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({
    description: 'Successful deletion',
  })
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(+id);
  }
}
