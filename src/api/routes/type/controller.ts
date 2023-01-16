import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, Patch } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { typeValitador } from './request'

@JsonController('/suportfy')
export class typeController {
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

