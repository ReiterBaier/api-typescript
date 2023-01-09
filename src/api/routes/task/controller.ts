import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, Res, UnauthorizedError } from 'routing-controllers'
import { findAll, findOne, create, update} from './service'
import { taskValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'
import { tokenError } from '../../errors/token-error'
import { Response } from 'express'

@JsonController('/suportfy')
export class taskController {
  @Get('/task')
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

  @Get('/task/:id')
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

  @Post('/task')
  @OnUndefined(400)
  postProject(@HeaderParam('authentication') token: string, @Body({ "required": true, "validate": true }) taskCreation: taskValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return create(taskCreation)
  }

  @Patch('/task/:id')
  @OnUndefined(200)
  patchProject(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() taskRequest: taskValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return update(taskRequest, id)
  }
}


