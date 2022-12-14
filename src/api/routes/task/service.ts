import { AppDatasource } from '../../../config/databaseConnection'
import { Task } from '../../../entities/task'
import { FindOneOptions } from 'typeorm'
import { taskValitador } from './request'

/* get all tasks and convert field blob to string */
export const findAll = async () => {

  const tasks: Task[] = await AppDatasource.manager.find(Task)

  const convertedTask = tasks.map((task) => {

    const convertDescription = Buffer.from(task.description).toString('utf-8')

    return ({...task, description: convertDescription})
  });
  
  return  convertedTask
}

/* get one task by id param, and convert field blob to string */
export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const task: Task = await AppDatasource.manager.findOne(Task, param)

    const convertDescription = Buffer.from(task.description).toString('utf-8')
  
    return ({...task, description: convertDescription})
  }




/* create a new task */
export const save = async (task: Task, taskRequest: taskValitador, id?: number) => {
  task.name = taskRequest.name
  task.description = taskRequest.description
  task.idMainTask = taskRequest.idMainTask
  task.idProject = taskRequest.idProject
  task.idClient = taskRequest.idClient
  task.idPlataform = taskRequest.idPlataform
  task.idType = taskRequest.idType
  task.idUser = taskRequest.idUser
  task.idStatus = taskRequest.idStatus
  task.expectedStartDate = taskRequest.expectedStartDate
  task.expectedEndDate = taskRequest.expectedEndDate
  task.endDate = taskRequest.endDate
  task.estimateTime = taskRequest.estimateTime

  const createdTask = await AppDatasource.manager.save(Task, task)

  return createdTask.id !== id ? { id: createdTask.id } : undefined
}


export const create = async (taskRequest: taskValitador) => {
  const task = new Task()

  return save(task, taskRequest)
}




/* change a existing task */

export const findOrNewInstance = async (id: number) => {
const filter: FindOneOptions = { where: { id: id } }

const foundedTask = await AppDatasource.manager.findOne(Task, filter)
return foundedTask || new Task()
}

export const update = async (taskRequest: taskValitador, id: number) => {
const task = await findOrNewInstance(id)
return save(task, taskRequest)
}


