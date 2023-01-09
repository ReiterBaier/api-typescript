import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, UnauthorizedError, Res } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { statusValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'
import { tokenError } from '../../errors/token-error'
import { Response } from 'express'

@JsonController('/suportfy')
export class statusController {
  @Get('/status')
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

  @Get('/status/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@HeaderParam('authentication') token: string,@Param('id') id: string, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return findOne(id)
  }

  @Post('/status')
  @OnUndefined(400)
  postStatus(@HeaderParam('authentication') token: string, @Body({ "required": true, "validate": true }) statusCreation: statusValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return create(statusCreation)
  }

  @Patch('/status/:id')
  @OnUndefined(200)
  patchStatus(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() statusRequest: statusValitador, @Res() response: Response) {
    if (!validateToken(token)) {
      return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    } else
    return update(statusRequest, id)
  }
}

