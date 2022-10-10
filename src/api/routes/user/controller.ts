import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findOne } from './service'

@JsonController('/suportfly')
export class UserAuthentication {
  @Post('/auth')
  @HttpCode(200)
  @OnUndefined(400)
  postUser(@HeaderParam('username') username: string, @HeaderParam('password') password:string) {
    return findOne(username, password)
  }
}


