import { AppDatasource } from '../../../database/databaseConnection'
import { Status } from '../../../entities/status'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Status)
}

export const findWithFilter = async (focus: string) => {
    const param: FindOneOptions = { where: [{ focus: focus }] }
  
    const status: Status = await AppDatasource.manager.find(Status, param)
  
    return status
  }