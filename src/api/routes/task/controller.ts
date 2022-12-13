import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findAll, findOne } from './service'

@JsonController('/suportfy')
export class taskController {
  @Get('/task')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }

  @Get('/task/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('id') id: string) {
    return findOne(id)
  }
}



/*
@JsonController('/suportfly')
export class createTask {
  @Post('/task/:id')
  @HttpCode(200)
  @OnUndefined(400)
  create(@Body() createTask: createTask) {
    return create(createTask)
  }
}
*/
/*
@Post('')
@HttpCode(201)
@OnUndefined(500)
post(@Body({ validate: true }) fromTosRequest: FromToRequest) {
  return create(fromTosRequest)
}
*/