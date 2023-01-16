import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, UseBefore} from 'routing-controllers'
import { findOne, findAll, create, update } from './service'
import { userValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class userController {
  @UseBefore(validateToken)
    
  @Get('/user')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
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
  postUser(@Body({ "required": true, "validate": true }) userCreation: userValitador) {
    return create(userCreation)
  }

  @Patch('/user/:id')
  @OnUndefined(200)
  @UseBefore(validateToken)
  patchUser( @Param('id') id: number, @Body() userRequest: userValitador) {
    return update(userRequest, id)
  }
}
