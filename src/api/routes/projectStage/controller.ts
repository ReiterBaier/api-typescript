import { JsonController,HeaderParam, HttpCode, OnUndefined, Get, Res, UnauthorizedError } from 'routing-controllers'
import { findAll } from './service'
import { validateToken } from '../auth/jsonwebtoken/token-validator'
import { Response } from 'express'
import { tokenError } from '../../errors/token-error'

@JsonController('/suportfy')
export class getAllProjectStage {
  @Get('/projectStage')
  @HttpCode(200)
  @OnUndefined(400)
  getAll(@HeaderParam('authentication') token: string, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return findAll()
  }
}


