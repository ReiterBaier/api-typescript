import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findAll, findWithFilter } from './service'

@JsonController('/suportfly')
export class getAllTypes {
  @Get('/types')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }
}


@JsonController('/suportfly')
export class getTypesByFocus {
  @Get('/types/:focus')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('focus') focus: string) {
    return findWithFilter(focus)
  }
}

