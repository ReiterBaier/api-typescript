import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, Res, UnauthorizedError, UseBefore } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { projectValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class projectController {
  @UseBefore(validateToken)
    
  @Get('/project')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }

  @Get('/project/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById( @Param('id') id: string) {
    return findOne(id)
  }

  @Post('/project')
  @OnUndefined(400)
  postProject( @Body({ "required": true, "validate": true }) projectCreation: projectValitador) {
    return create(projectCreation)
  }

  @Patch('/project/:id')
  @OnUndefined(200)
  patchProject( @Param('id') id: number, @Body() projectRequest: projectValitador) {
    return update(projectRequest, id)
  }
}





