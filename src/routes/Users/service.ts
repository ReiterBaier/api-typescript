import { IsNotEmpty, IsString } from 'class-validator'

export class AuthUser {
  @IsString()
  @IsNotEmpty()
  user: string

  @IsString()
  @IsNotEmpty()
  password: string

}

export class ResponseAuthUser {
  @IsString()
  token: string
}