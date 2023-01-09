import { JsonController, HeaderParam,Param, HttpCode, OnUndefined, Get, Post, Patch, Body, UnauthorizedError, Res} from 'routing-controllers'
import { findAll, findOne, create, update} from './service'
import { stageValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'
import { tokenError } from '../../errors/token-error'
import { Response } from 'express'


@JsonController('/suportfy')
export class stageController {
  @Get('/stage')
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

  @Get('/stage/:id')
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

  @Post('/stage')
  @OnUndefined(400)
  postStage(@HeaderParam('authentication') token: string, @Body({ "required": true, "validate": true }) stageCreation: stageValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return create(stageCreation)
  }

  @Patch('/stage/:id')
  @OnUndefined(200)
  patchProject(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() stageRequest: stageValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return update(stageRequest, id)
  }
}



