import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch} from 'routing-controllers'
import { findOne, findAll, create, update } from './service'
import { userValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'


@JsonController('/suportfy')
export class userController {
  @Get('/user')
  @HttpCode(200)
  @OnUndefined(400)
  getAll(@HeaderParam('authentication') token: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findAll()
  }

  @Get('/user/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@Param('id') id: string) {
    return findOne(id)
  }

  @Post('/user')
  @OnUndefined(400)
  postUser(@HeaderParam('authentication') token: string,@Body({ "required": true, "validate": true }) userCreation: userValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return create(userCreation)
  }

  @Patch('/user/:id')
  @OnUndefined(200)
  patchUser(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() userRequest: userValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return update(userRequest, id)
  }
}
