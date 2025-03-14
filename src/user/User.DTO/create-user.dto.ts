import { IsString, IsEmail, IsNotEmpty, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  YOB: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(["M", "F"], { message: "Gender must be either 'M' or 'F'" })
  gender: "M" | "F";

  @IsString()
  @IsNotEmpty()
  password: string;
}
