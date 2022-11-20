//src/products/dto/create-product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @MaxLength(100)
    @ApiProperty()
    name: string;

    @IsOptional()
    @MaxLength(150)
    @ApiProperty({ required: false })
    surname?: string;

    @IsEmail()
    @ApiProperty()
    email: number;

    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty()
    password: string;

}