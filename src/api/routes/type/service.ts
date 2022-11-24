import { AppDatasource } from '../../../config/databaseConnection'
import { Type } from '../../../entities/type'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Type)
}


export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const types: Type = await AppDatasource.manager.findOne(Type, param)
  
    return types
  }