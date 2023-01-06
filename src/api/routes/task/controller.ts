import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch } from 'routing-controllers'
import { findAll, findOne, create, update} from './service'
import { taskValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class taskController {
  @Get('/task')
  @HttpCode(200)
  @OnUndefined(400)
  getAll(@HeaderParam('authentication') token: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findAll()
  }

  @Get('/task/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@HeaderParam('authentication') token: string, @Param('id') id: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findOne(id)
  }

  @Post('/task')
  @OnUndefined(400)
  postProject(@HeaderParam('authentication') token: string, @Body({ "required": true, "validate": true }) taskCreation: taskValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return create(taskCreation)
  }

  @Patch('/task/:id')
  @OnUndefined(200)
  patchProject(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() taskRequest: taskValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return update(taskRequest, id)
  }
}


