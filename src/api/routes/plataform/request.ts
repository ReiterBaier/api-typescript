import { IsNotEmpty, IsString, Length } from 'class-validator'


export class plataformValidator {
  @IsNotEmpty()
  @IsString()
  @Length(1,20)
  document: string

  @IsNotEmpty()
  @IsString()
  @Length(1,60)
  name: string
}
