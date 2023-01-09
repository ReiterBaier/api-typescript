import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, UnauthorizedError, Res } from 'routing-controllers'
import { findAll, findOne, create, update} from './service'
import { plataformValidator } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'
import { tokenError } from '../../errors/token-error'
import { Response } from 'express'

@JsonController('/suportfy')
export class plataformController {
  @Get('/plataform')
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

  @Get('/plataform/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@HeaderParam('authentication') token: string, @Param('id') id: string, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return findOne(id)
  }

  
  @Post('/plataform')
  @OnUndefined(400)
  postPlataform(@HeaderParam('authentication') token: string, @Body({ "required": true, "validate": true }) plataformCreation: plataformValidator, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return create(plataformCreation)
  }

  @Patch('/plataform/:id')
  @OnUndefined(200)
  patchPlataform(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() plataformRequest: plataformValidator, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return update(plataformRequest, id)
  }
}
