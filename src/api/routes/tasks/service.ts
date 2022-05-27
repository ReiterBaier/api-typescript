import { AppDatasource } from '../../../database/databaseConnection'
import { Tasks } from '../../../entities/tasks'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Tasks)
}


export const findWithFilter = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const tasks: Tasks = await AppDatasource.manager.find(Tasks, param)
  
    return tasks
  }