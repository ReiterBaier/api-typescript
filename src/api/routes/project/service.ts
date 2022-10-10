import { AppDatasource } from '../../../database/databaseConnection'
import { Project } from '../../../entities/project'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Project)
}


export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const projects: Project = await AppDatasource.manager.findOne(Project, param)
  
    return projects
  }