/* eslint-disable prettier/prettier */
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['ADMIN' , 'USER', {message:'Valid role required'}])
    role:   'ADMIN' | 'USER'
}