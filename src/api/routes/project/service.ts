import { AppDatasource } from '../../../config/databaseConnection'
import { Project } from '../../../entities/project'
import { FindOneOptions } from 'typeorm'
import { projectValitador } from './request'


/* get all projects  */
export const findAll = async () => {

    const projects: Project[] = await AppDatasource.manager.find(Project)
  
      const convertedProject = projects.map((project) => {
    
        const convertDescription = Buffer.from(project.description).toString('utf-8')
    
        return ({...project, description: convertDescription})
      });
    
    return  convertedProject
  }
  

/* get one project */
export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const projects: Project = await AppDatasource.manager.findOne(Project, param)

    const convertDescription = Buffer.from(projects.description).toString('utf-8')

    return ({...projects, description: convertDescription})
  }


/* create a new project */
 export const save = async (project: Project, projectRequest: projectValitador, id?: number) => {
    project.name = projectRequest.name
    project.idClient = projectRequest.idClient
    project.idPlataform = projectRequest.idPlataform
    project.idType = projectRequest.idType
    project.idUser = projectRequest.idUser
    project.idStatus = projectRequest.idStatus
    project.expectedStartDate = projectRequest.expectedStartDate
    project.expectedEndDate = projectRequest.expectedEndDate
    project.endDate = projectRequest.endDate
    project.estimateTime = projectRequest.estimateTime
    project.description = projectRequest.description
  
    const createdProject = await AppDatasource.manager.save(Project, project)
  
    return createdProject.id !== id ? { id: createdProject.id } : undefined
  }


  export const create = async (projectRequest: projectValitador) => {
    const project = new Project()
  
    return save(project, projectRequest)
  }





/* update existing project */
export const findOrNewInstance = async (id: number) => {
  const filter: FindOneOptions = { where: { id: id } }

  const foundedProject = await AppDatasource.manager.findOne(Project, filter)
  return foundedProject || new Project()
}

export const update = async (projectRequest: projectValitador, id: number) => {
  const project = await findOrNewInstance(id)
  return save(project, projectRequest)
}