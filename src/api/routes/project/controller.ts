import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, Patch } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { projectValitador } from './request'


@JsonController('/suportfy')
export class projectController {
  @Get('/project')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }

  @Get('/project/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('id') id: string) {
    return findOne(id)
  }

  @Post('/project')
  @OnUndefined(400)
  createProject(@Body({ "required": true, "validate": true}) projectCreation: projectValitador) {
    return create(projectCreation)
  }

  @Patch('/project/:id')
  @OnUndefined(200)
  updateProject(@Param('id') id: number, @Body() clientRequest: projectValitador) {
    return update(clientRequest, id)
  }
}





