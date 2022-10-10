import { AppDatasource } from '../../../database/databaseConnection'
import { Task } from '../../../entities/task'
import { FindOneOptions } from 'typeorm'




export const findAll2 = async () => {

   return AppDatasource.manager.find(Task)
    
}

export const findAll = async () => {

  const tasks: Task[] = await AppDatasource.manager.find(Task)

  const convertDescription = Buffer.from(tasks.description).toString('utf-8')
  
  return ({...tasks, description: convertDescription})
   
}

export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const task: Task = await AppDatasource.manager.findOne(Task, param)

    const convertDescription = Buffer.from(task.description).toString('utf-8')
  
    return ({...task, description: convertDescription})
  }
  
