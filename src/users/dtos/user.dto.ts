import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'nombre de pila del usuario' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly userName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
