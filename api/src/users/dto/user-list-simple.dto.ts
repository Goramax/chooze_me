import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

// type UserProperties = Required<UserDto>;
export enum State {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}
export class UserSimpleListDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;

  constructor(value: User) {
    this.id = value.id ?? 0;
    this.firstName = value.firstName ?? '';
    this.lastName = value.lastName ?? '';
  }
}
