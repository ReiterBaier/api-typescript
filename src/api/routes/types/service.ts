import { AppDatasource } from '../../../database/databaseConnection'
import { Types } from '../../../entities/types'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Types)
}


export const findWithFilter = async (focus: string) => {
    const param: FindOneOptions = { where: [{ focus: focus }] }
  
    const types: Types = await AppDatasource.manager.findOne(Types, param)
  
    return types
  }