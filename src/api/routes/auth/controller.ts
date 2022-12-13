import { JsonController, Post,HttpCode, OnUndefined, HeaderParam } from 'routing-controllers'
import { authService } from './service'


@JsonController('/suportfy')
export class authUser {
  @Post('/auth')
  @HttpCode(200)
  @OnUndefined(400)
  postUser(@HeaderParam('username') username: string, @HeaderParam('password') password:string) {
    return authService(username, password)
  }
}