import { AppDatasource } from '../../../database/databaseConnection'
import { Conexoes } from '../../../entities/conexoes'
import { FindOneOptions } from 'typeorm'


export const findOne = async (integrationId: string) => {
    const param: FindOneOptions = { where: [{ integrationId: integrationId }] }
  
    const conexao: Conexoes = await AppDatasource.manager.findOne(Conexoes, param)
  
    return conexao
  }

