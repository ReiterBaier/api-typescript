import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, UnauthorizedError, Res, UseBefore } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { statusValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class statusController {
  @UseBefore(validateToken)
    
  @Get('/status')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }

  @Get('/status/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@Param('id') id: string) {
    return findOne(id)
  }

  @Post('/status')
  @OnUndefined(400)
  postStatus( @Body({ "required": true, "validate": true }) statusCreation: statusValitador) {
    return create(statusCreation)
  }

  @Patch('/status/:id')
  @OnUndefined(200)
  patchStatus( @Param('id') id: number, @Body() statusRequest: statusValitador) {
    return update(statusRequest, id)
  }
}

