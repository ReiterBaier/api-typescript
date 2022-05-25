import { JsonController, Post, Param, Header, HttpCode, OnUndefined } from 'routing-controllers'
import { AuthUser, ResponseAuthUser } from './service'

@JsonController('/suportfy/auth')
export class UserAuthentication {
  @Post()
  @HttpCode(200)
  @OnUndefined(400)
  postUser(@Param('username') username: string, @Param('password') password:string) {
    return new ResponseAuthUser()
  }
}
