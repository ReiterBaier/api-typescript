import { JsonController, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findWithFilter } from './service'


@JsonController('/suportfly')
export class getStagesByIntegrationId {
  @Get('/stage/:integrationId')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('integrationId') integrationId: string) {
    return findWithFilter(integrationId)
  }
}



