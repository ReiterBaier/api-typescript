import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findAll, findWithFilter } from './service'

@JsonController('/suportfy')
export class getAllTasks {
  @Get('/tasks')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }
}


@JsonController('/suportfy')
export class getTaskById {
  @Get('/tasks/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('id') id: string) {
    return findWithFilter(id)
  }
}

