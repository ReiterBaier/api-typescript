import { JsonController,HeaderParam, HttpCode, OnUndefined, Get} from 'routing-controllers'
import { findAll } from './service'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class getAllProjectStage {
  @Get('/projectStage')
  @HttpCode(200)
  @OnUndefined(400)
  getAll(@HeaderParam('authentication') token: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findAll()
  }
}


