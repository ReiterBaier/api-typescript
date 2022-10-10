import { AppDatasource } from '../../../database/databaseConnection'
import { Type } from '../../../entities/type'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Type)
}


export const findWithFilter = async (focus: string) => {
    const param: FindOneOptions = { where: [{ focus: focus }] }
  
    const types: Type = await AppDatasource.manager.findOne(Type, param)
  
    return types
  }