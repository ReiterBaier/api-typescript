import { AppDatasource } from '../../../database/databaseConnection'
import { Client } from '../../../entities/client'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Client)
}

export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const client: Client = await AppDatasource.manager.findOne(Client, param)
  
    return client
  }