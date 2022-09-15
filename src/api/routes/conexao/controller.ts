import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findOne, findAll } from './service'


@JsonController('/suportfly')
export class getConexaoByToken {
  @Get('/connection/:integrationId')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('integrationId') integrationId: string) {
    return findAll(integrationId)
  }
}





