import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, Patch } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { clientValitador } from './request'

@JsonController('/suportfy')
export class clientController {
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
  postClient( @Body({ "required": true, "validate": true }) clientCreation: clientValitador) {
    return create(clientCreation)
  }

  @Patch('/client/:id')
  @OnUndefined(200)
  patchClient( @Param('id') id: number, @Body() clientRequest: clientValitador) {
    return update(clientRequest, id)
  }
}






