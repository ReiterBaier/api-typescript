import { IsNotEmpty, IsString, IsInt } from 'class-validator'


export class stageValitador {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  description: Buffer

  @IsNotEmpty()
  @IsInt({ each: true })
  weight: number
}
