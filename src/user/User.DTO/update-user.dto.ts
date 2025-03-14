import { IsString, IsEmail, IsOptional, IsIn } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;


  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  YOB?: string;

  @IsOptional()
  @IsString()
  @IsIn(["M", "F"], { message: "Gender must be either 'M' or 'F'" })
  gender?: "M" | "F";

  @IsOptional()
  @IsString()
  password?: string;
  
}
