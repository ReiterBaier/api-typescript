import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'


export class clientValitador {
  @IsNotEmpty()
  @IsString()
  @Length(1,20)
  document: string

  @IsNotEmpty()
  @IsString()
  @Length(1,100)
  name: string

  @IsOptional()
  @IsString()
  token: string
}
