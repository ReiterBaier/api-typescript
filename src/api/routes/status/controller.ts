import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findAll, findOne } from './service'

@JsonController('/suportfly')
export class getAllStatus {
  @Get('/status')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }
}

@JsonController('/suportfly')
export class getStatusByFocus {
  @Get('/status/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('id') id: string) {
    return findOne(id)
  }
}



