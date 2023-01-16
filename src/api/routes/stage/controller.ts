import { JsonController,Param, HttpCode, OnUndefined, Get, Post, Patch, Body, UseBefore} from 'routing-controllers'
import { findAll, findOne, create, update} from './service'
import { stageValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class stageController {
  @UseBefore(validateToken)
    
  @Get('/stage')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }

  @Get('/stage/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById( @Param('id') id: string) {
    return findOne(id)
  }

  @Post('/stage')
  @OnUndefined(400)
  postStage( @Body({ "required": true, "validate": true }) stageCreation: stageValitador) {
    return create(stageCreation)
  }

  @Patch('/stage/:id')
  @OnUndefined(200)
  patchProject( @Param('id') id: number, @Body() stageRequest: stageValitador) {
    return update(stageRequest, id)
  }
}



