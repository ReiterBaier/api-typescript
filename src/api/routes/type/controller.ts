import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, Res, UnauthorizedError } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { typeValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'
import { tokenError } from '../../errors/token-error'
import { Response } from 'express'

@JsonController('/suportfy')
export class typeController {
  @Get('/type')
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

  @Get('/type/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@HeaderParam('authentication') token: string,@Param('id') id: string, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return findOne(id)
  }

  @Post('/type')
  @OnUndefined(400)
  postType(@HeaderParam('authentication') token: string,@Body({ "required": true, "validate": true }) typeCreation: typeValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return create(typeCreation)
  }

  @Patch('/type/:id')
  @OnUndefined(200)
  patchType(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() typeRequest: typeValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return update(typeRequest, id)
  }
}

