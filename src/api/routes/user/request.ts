import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'


export class userValitador {
  @IsNotEmpty()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  token: string
}
