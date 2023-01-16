import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, UseBefore } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { typeValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class typeController {
  @UseBefore(validateToken)

  @Get('/type')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }

  @Get('/type/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@Param('id') id: string) {
    return findOne(id)
  }

  @Post('/type')
  @OnUndefined(400)
  postType(@Body({ "required": true, "validate": true }) typeCreation: typeValitador) {
    return create(typeCreation)
  }

  @Patch('/type/:id')
  @OnUndefined(200)
  patchType( @Param('id') id: number, @Body() typeRequest: typeValitador) {
    return update(typeRequest, id)
  }
}

