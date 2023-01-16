import { JsonController, HttpCode, OnUndefined, Get } from 'routing-controllers'
import { findAll } from './service'

@JsonController('/suportfy')
export class getAllProjectStage {
  @Get('/projectStage')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }
}


