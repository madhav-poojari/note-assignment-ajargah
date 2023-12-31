import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class UpdateUserDto  {
  @ApiProperty()
  email?: string;
  @ApiProperty()
  firstName?: string;
  @ApiProperty()
  password?: string;
}
