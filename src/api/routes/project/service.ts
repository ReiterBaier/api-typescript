import { AppDatasource } from '../../../config/databaseConnection'
import { Project } from '../../../entities/project'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {

    const projects: Project[] = await AppDatasource.manager.find(Project)
  
      const convertedProject = projects.map((project) => {
    
        const convertDescription = Buffer.from(project.description).toString('utf-8')
    
        return ({...project, description: convertDescription})
      });
    
    return  convertedProject
  }
  


export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const projects: Project = await AppDatasource.manager.findOne(Project, param)

    const convertDescription = Buffer.from(projects.description).toString('utf-8')

    return ({...projects, description: convertDescription})
  }