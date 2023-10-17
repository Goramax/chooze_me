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
  @ApiProperty()
  @IsNotEmpty()
  password: string;
  @ApiProperty()
  @IsNotEmpty()
  salt: string;

  constructor(
    login: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    salt: string,
  ) {
    this.login = login;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.salt = salt;
  }
}
