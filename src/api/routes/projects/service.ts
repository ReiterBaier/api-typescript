import { AppDatasource } from '../../../database/databaseConnection'
import { Projects } from '../../../entities/projects'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Projects)
}


export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const projects: Projects = await AppDatasource.manager.findOne(Projects, param)
  
    return projects
  }