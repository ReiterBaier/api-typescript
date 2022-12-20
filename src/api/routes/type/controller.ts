import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { typeValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class typeController {
  @Get('/type')
  @HttpCode(200)
  @OnUndefined(400)
  getAll(@HeaderParam('authentication') token: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findAll()
  }

  @Get('/type/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@HeaderParam('authentication') token: string,@Param('id') id: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findOne(id)
  }

  @Post('/type')
  @OnUndefined(400)
  postType(@HeaderParam('authentication') token: string,@Body({ "required": true, "validate": true }) typeCreation: typeValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return create(typeCreation)
  }

  @Patch('/type/:id')
  @OnUndefined(200)
  patchType(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() typeRequest: typeValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return update(typeRequest, id)
  }
}

