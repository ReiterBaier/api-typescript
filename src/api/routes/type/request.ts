import { IsNotEmpty, IsString } from 'class-validator'


export class typeValitador {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  focus: string
}
