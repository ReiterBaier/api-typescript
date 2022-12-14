import { JsonController, Post,HttpCode, OnUndefined, HeaderParam } from 'routing-controllers'
import { authService } from './service'


@JsonController('/suportfy')
export class authUser {
  @Post('/auth')
  @HttpCode(200)
  @OnUndefined(400)
  postUser(@HeaderParam('email') email: string, @HeaderParam('password') password:string) {
    return authService(email, password)
  }
}