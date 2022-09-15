import { JsonController, Post, Param, HttpCode, OnUndefined, Get } from 'routing-controllers'
import { findOne } from './service'


@JsonController('/suportfly')
export class getClientScriptByToken {
  @Get('/clientScript/:token')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('token') token: string) {
    return findOne(token)
  }
}





