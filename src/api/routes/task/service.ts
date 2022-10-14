import { AppDatasource } from '../../../database/databaseConnection'
import { Task } from '../../../entities/task'
import { FindOneOptions } from 'typeorm'
/*
import { createTravelValitador } from './request'
import { modelTask } from '../../model/task'*/


export const findAll = async () => {

  const tasks: Task[] = await AppDatasource.manager.find(Task)

  const convertedTask = tasks.map((task) => {

    const convertDescription = Buffer.from(task.description).toString('utf-8')

    return ({...task, description: convertDescription})
  });
  
  return  convertedTask
}


export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const task: Task = await AppDatasource.manager.findOne(Task, param)

    const convertDescription = Buffer.from(task.description).toString('utf-8')
  
    return ({...task, description: convertDescription})
  }
  

  /*export const create = async (createTravelValitador: CreateTravelValitador) => {
    const task = new modelTask;

    Object.assign(travel, {
        description: createTravelValitador.description
    })

    tasks.push(task);
    return task;
}
*/







  /*
  forEach não retorna dados
  mesma sintaxe do map 
  
    const convertTask = tasks.map((task, index) => {

    const convertDescription = Buffer.from(task.description).toString('utf-8')

    console.log(tasks[index])

    return ({...task, description: convertDescription})
  });
  */