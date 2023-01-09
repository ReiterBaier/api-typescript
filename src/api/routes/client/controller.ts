import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, UnauthorizedError, Res } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { clientValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'
import { tokenError } from '../../errors/token-error'
import { Response } from 'express'

@JsonController('/suportfy')
export class clientController {
  @Get('/client')
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

  @Get('/client/:id')
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

  @Post('/client')
  @OnUndefined(400)
  postClient(@HeaderParam('authentication') token: string, @Body({ "required": true, "validate": true }) clientCreation: clientValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return create(clientCreation)
  }

  @Patch('/client/:id')
  @OnUndefined(200)
  patchClient(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() clientRequest: clientValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return update(clientRequest, id)
  }
}






