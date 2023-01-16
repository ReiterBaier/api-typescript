import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, UseBefore } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { clientValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class clientController {
  @UseBefore(validateToken)
    
  @Get('/client')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }

  @Get('/client/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById( @Param('id') id: string) {
    return findOne(id)
  }

  @Post('/client')
  @OnUndefined(400)
  postClient(@Body({ "required": true, "validate": true }) clientCreation: clientValitador) {
    return create(clientCreation)
  }

  @Patch('/client/:id')
  @OnUndefined(200)
  patchClient(@Param('id') id: number, @Body() clientRequest: clientValitador) {
    return update(clientRequest, id)
  }
}






