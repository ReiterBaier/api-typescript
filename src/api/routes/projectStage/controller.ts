import { JsonController, HttpCode, OnUndefined, Get, UseBefore } from 'routing-controllers'
import { findAll } from './service'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class getAllProjectStage {
  @UseBefore(validateToken)
    
  @Get('/projectStage')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }
}


