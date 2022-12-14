import { IsNotEmpty, IsDateString, IsInt, IsOptional, IsString, Length } from 'class-validator'

export class taskValitador {
  @IsNotEmpty()
  @IsString()
  @Length(1,200)
  name: string

  @IsOptional()
  @IsString()
  description: Buffer

  @IsOptional()
  @IsInt({ each: true })
  idMainTask: number

  @IsOptional()
  @IsInt({ each: true })
  idProject: number

  @IsNotEmpty()
  @IsInt({ each: true })
  idClient: number

  @IsNotEmpty()
  @IsInt({ each: true })
  idPlataform: number

  @IsNotEmpty()
  @IsInt({ each: true })
  idType: number

  @IsNotEmpty()
  @IsInt({ each: true })
  idUser: number

  @IsOptional()
  @IsInt({ each: true })
  idStatus: number

  @IsOptional()
  @IsDateString()
  expectedStartDate: string 

  @IsOptional()
  @IsDateString()
  expectedEndDate: string 

  @IsOptional()
  @IsDateString()
  endDate: string 

  @IsOptional()
  @IsInt({ each: true })
  estimateTime: number 
}
