import { AppDatasource } from '../../../database/databaseConnection'
import { Plataform } from '../../../entities/plataform'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Plataform)
}

export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const client: Plataform = await AppDatasource.manager.findOne(Plataform, param)
  
    return client
  }