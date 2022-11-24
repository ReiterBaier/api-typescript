import { JsonController,Param, HttpCode, OnUndefined, Get} from 'routing-controllers'
import { findAll, findOne } from './service'

@JsonController('/suportfly')
export class getAllStage {
  @Get('/stage')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }
}

@JsonController('/suportfly')
export class getStageById {
  @Get('/stage/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getOne(@Param('id') id: string) {
    return findOne(id)
  }
}



