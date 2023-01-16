import { JsonController, HeaderParam, Post, Param, HttpCode, OnUndefined, Get, Body, Patch, UnauthorizedError, Res, UseBefore } from 'routing-controllers'
import { findAll, findOne, create, update} from './service'
import { plataformValidator } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class plataformController {
  @UseBefore(validateToken)

  @Get('/plataform')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }

  @Get('/plataform/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById( @Param('id') id: string) {
    return findOne(id)
  }

  
  @Post('/plataform')
  @OnUndefined(400)
  postPlataform( @Body({ "required": true, "validate": true }) plataformCreation: plataformValidator) {
    return create(plataformCreation)
  }

  @Patch('/plataform/:id')
  @OnUndefined(200)
  patchPlataform( @Param('id') id: number, @Body() plataformRequest: plataformValidator) {
    return update(plataformRequest, id)
  }
}
