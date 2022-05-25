import { JsonController, Post, Param, Header, HttpCode, OnUndefined, Get } from 'routing-controllers'
import { AuthUser, ResponseAuthUser } from './service'

@JsonController('/suportfy')
export class UserAuthentication {
  @Post('/auth')
  @HttpCode(200)
  @OnUndefined(400)
  postUser(@Param('user') user: string, @Param('password') password:string) {
    return new AuthUser()
  }
}
