import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'newlogin' })
  @IsNotEmpty()
  login: string;
  @ApiProperty({ example: 'email@domain.com' })
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  firstName: string;
  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  constructor(
    login: string,
    email: string,
    firstName: string,
    lastName: string,
  ) {
    this.login = login;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
