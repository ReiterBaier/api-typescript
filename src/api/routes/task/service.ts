import { AppDatasource } from '../../../config/databaseConnection'
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




/*


export const save = async (project: Project, projectRequest: projectValitador, id?: number) => {
  project.name = projectRequest.name
  project.idClient = projectRequest.idClient
  project.idPlataform = projectRequest.idPlataform
  project.idType = projectRequest.idType
  project.idUser = projectRequest.idUser
  project.idStatus = projectRequest.idStatus
  project.previousStartDate = projectRequest.previousStartDate
  project.previousConclusionDate = projectRequest.previousConclusionDate
  project.estimateTime = projectRequest.estimateTime
  project.description = projectRequest.description

  const createdProject = await AppDatasource.manager.save(Project, project)

  return createdProject.id !== id ? { id: createdProject.id } : undefined
}


export const create = async (projectRequest: projectValitador) => {
  const project = new Project()

  return save(project, projectRequest)
}






export const findOrNewInstance = async (id: number) => {
const filter: FindOneOptions = { where: { id: id } }

const foundedProject = await AppDatasource.manager.findOne(Project, filter)
return foundedProject || new Project()
}

export const update = async (projectRequest: projectValitador, id: number) => {
const project = await findOrNewInstance(id)
return save(project, projectRequest)
}

*/

