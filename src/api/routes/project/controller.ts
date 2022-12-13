import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, Put } from 'routing-controllers'
import { findAll, findOne, create, update } from './service'
import { PostProjectValitador } from './request'


@JsonController('/suportfly')
export class getAllProjects {
  @Get('/project')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }
}
@JsonController('/suportfly')
export class getProjectsById {
  @Get('/project/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('id') id: string) {
    return findOne(id)
  }
}


@JsonController('/suportfly')
export class createProject {
  @Post('/project')
  @OnUndefined(400)
  createProject(@Body({ "required": true, "validate": true}) projectCreation: PostProjectValitador) {
    return create(projectCreation)
  }
}

@JsonController('/suportfly')
export class updateProject {
  @Put('/project/:id')
  @OnUndefined(200)
  updateProject(@Param('id') id: number, @Body() clientRequest: PostProjectValitador) {
    return update(clientRequest, id)
  }
}


