import { JsonController, HeaderParam,Param, HttpCode, OnUndefined, Get, Post, Patch, Body} from 'routing-controllers'
import { findAll, findOne, create, update} from './service'
import { stageValitador } from './request'
import { validateToken } from '../auth/jsonwebtoken/token-validator'

@JsonController('/suportfy')
export class stageController {
  @Get('/stage')
  @HttpCode(200)
  @OnUndefined(400)
  getAll(@HeaderParam('authentication') token: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findAll()
  }

  @Get('/stage/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@HeaderParam('authentication') token: string, @Param('id') id: string) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return findOne(id)
  }

  @Post('/stage')
  @OnUndefined(400)
  postStage(@HeaderParam('authentication') token: string, @Body({ "required": true, "validate": true }) stageCreation: stageValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return create(stageCreation)
  }

  @Patch('/stage/:id')
  @OnUndefined(200)
  patchProject(@HeaderParam('authentication') token: string, @Param('id') id: number, @Body() stageRequest: stageValitador) {
    if (!validateToken(token)) {
      return new Error('error: Your token is not valid or has already expired')
    } else
    return update(stageRequest, id)
  }
}



