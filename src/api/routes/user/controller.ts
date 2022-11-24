import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findOne, findAll  } from './service'


@JsonController('/suportfly')
export class getAllUser {
  @Get('/user')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }
}

@JsonController('/suportfly')
export class getUserById {
  @Get('/user/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getOne(@Param('id') id: string) {
    return findOne(id)
  }
}


