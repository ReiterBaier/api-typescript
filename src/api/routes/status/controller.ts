import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { statusValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class statusController {
  @Get('/status')
  @HttpCode(200)
  @OnUndefined(400)
  getAll(@HeaderParam('authentication') token: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findAll()
  }

  @Get('/status/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@HeaderParam('authentication') token: string,@Param('id') id: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findOne(id)
  }

  @Post('/status')
  @OnUndefined(400)
  postStatus(@HeaderParam('authentication') token: string, @Body({ "required": true, "validate": true }) statusCreation: statusValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return create(statusCreation)
  }

  @Patch('/status/:id')
  @OnUndefined(200)
  patchStatus(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() statusRequest: statusValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return update(statusRequest, id)
  }
}

