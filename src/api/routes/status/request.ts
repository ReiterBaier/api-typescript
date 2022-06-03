import { IsOptional } from 'class-validator'


export class StatusRequest {

  @IsOptional()
  name?: string

  @IsOptional()
  showName?: string
}

