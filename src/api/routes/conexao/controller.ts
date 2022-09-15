import { JsonController, Param, HttpCode, OnUndefined, Get} from 'routing-controllers'
import { findOne } from './service'


@JsonController('/suportfly')
export class getConexaoByToken {
  @Get('/connection/:integrationId')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('integrationId') integrationId: string) {
    return findOne(integrationId)
  }
}





