import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { clientValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class clientController {
  @Get('/client')
  @HttpCode(200)
  @OnUndefined(400)
  getAll(@HeaderParam('authentication') token: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findAll()
  }

  @Get('/client/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@HeaderParam('authentication') token: string, @Param('id') id: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findOne(id)
  }

  @Post('/client')
  @OnUndefined(400)
  postClient(@HeaderParam('authentication') token: string, @Body({ "required": true, "validate": true }) clientCreation: clientValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return create(clientCreation)
  }

  @Patch('/client/:id')
  @OnUndefined(200)
  patchClient(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() clientRequest: clientValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return update(clientRequest, id)
  }
}






