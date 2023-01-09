import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, UnauthorizedError, Res} from 'routing-controllers'
import { findOne, findAll, create, update } from './service'
import { userValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'
import { tokenError } from '~/api/errors/token-error'
import { Response } from 'express'


@JsonController('/suportfy')
export class userController {
  @Get('/user')
  @HttpCode(200)
  @OnUndefined(400)
  getAll(@HeaderParam('authentication') token: string, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return findAll()
  }

  @Get('/user/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@HeaderParam('authentication') token: string, @Param('id') id: string, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return findOne(id)
  }

  @Post('/user')
  @OnUndefined(400)
  postUser(@HeaderParam('authentication') token: string,@Body({ "required": true, "validate": true }) userCreation: userValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return create(userCreation)
  }

  @Patch('/user/:id')
  @OnUndefined(200)
  patchUser(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() userRequest: userValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return update(userRequest, id)
  }
}
