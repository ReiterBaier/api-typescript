import { AppDatasource } from '../../../database/databaseConnection'
import { Task } from '../../../entities/task'
import { FindOneOptions } from 'typeorm'


export const findAll = async () => {

  const tasks: Task[] = await AppDatasource.manager.find(Task)

  const convertTask = tasks.map((task) => {

    const convertDescription = Buffer.from(task.description).toString('utf-8')

    return ({...task, description: convertDescription})
  });
  
  return  convertTask
}


export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const task: Task = await AppDatasource.manager.findOne(Task, param)

    const convertDescription = Buffer.from(task.description).toString('utf-8')
  
    return ({...task, description: convertDescription})
  }
  




  /*
  forEach não retorna dados
  mesma sintaxe do map 
  
    const convertTask = tasks.map((task, index) => {

    const convertDescription = Buffer.from(task.description).toString('utf-8')

    console.log(tasks[index])

    return ({...task, description: convertDescription})
  });
  */