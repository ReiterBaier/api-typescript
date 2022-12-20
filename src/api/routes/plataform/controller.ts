import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch } from 'routing-controllers'
import { findAll, findOne, create, update} from './service'
import { plataformValidator } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class plataformController {
  @Get('/plataform')
  @HttpCode(200)
  @OnUndefined(400)
  getAll(@HeaderParam('authentication') token: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findAll()
  }

  @Get('/plataform/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@HeaderParam('authentication') token: string, @Param('id') id: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findOne(id)
  }

  
  @Post('/plataform')
  @OnUndefined(400)
  postPlataform(@HeaderParam('authentication') token: string, @Body({ "required": true, "validate": true }) plataformCreation: plataformValidator) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return create(plataformCreation)
  }

  @Patch('/plataform/:id')
  @OnUndefined(200)
  patchPlataform(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() plataformRequest: plataformValidator) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return update(plataformRequest, id)
  }
}
