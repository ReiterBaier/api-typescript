import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findAll, findOne } from './service'

@JsonController('/suportfy')
export class getAllPlataforms {
  @Get('/plataform')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }
}

@JsonController('/suportfy')
export class getPlataformById {
  @Get('/plataform/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('id') id: string) {
    return findOne(id)
  }
}




