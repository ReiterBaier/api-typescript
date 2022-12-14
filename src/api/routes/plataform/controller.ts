import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findAll, findOne } from './service'

@JsonController('/suportfy')
export class plataformController {
  @Get('/plataform')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }

  @Get('/plataform/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@Param('id') id: string) {
    return findOne(id)
  }
}
