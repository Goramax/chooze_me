import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

// type UserProperties = Required<UserDto>;
export enum State {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}
export class UserDto {
  @ApiProperty()
  id: number;
  @ApiProperty({ example: 'newlogin' })
  login: string;
  @ApiProperty({ example: 'email@domain.com' })
  email: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty({ enum: State })
  state: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  salt: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  constructor(value: User) {
    this.id = value.id ?? 0;
    this.login = value.login ?? '';
    this.email = value.email ?? '';
    this.password = value.password ?? '';
    this.firstName = value.firstName ?? '';
    this.lastName = value.lastName ?? '';
    this.state = value.state ?? State.ACTIVE;
    this.createdAt = value.createdAt ?? new Date();
    this.updatedAt = value.updatedAt ?? new Date();
  }
}
