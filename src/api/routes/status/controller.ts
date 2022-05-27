import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findAll, findWithFilter } from './service'

@JsonController('/suportfy')
export class getAllStatus {
  @Get('/status')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }
}

@JsonController('/suportfy')
export class getStatusByFocus {
  @Get('/status/:focus')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('focus') focus: string) {
    return findWithFilter(focus)
  }
}




