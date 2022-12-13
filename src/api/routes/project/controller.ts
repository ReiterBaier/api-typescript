import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findAll, findOne } from './service'


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


/*
import { createProjectValitador } from './request'
@JsonController('/suportfly')
export class createProject {
  @Post('/projects')
  @HttpCode(200)
  @OnUndefined(400)
  projectObject(@Body({ "required": true, "validate": true}) projectObject: object) {
    return new createProjectValitador()
  }
}
*/