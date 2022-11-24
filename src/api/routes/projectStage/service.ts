import { AppDatasource } from '../../../config/databaseConnection'
import { ProjectStage } from '../../../entities/projectStage'
import { FindOneOptions } from 'typeorm'


  export const findAll = async () => {

    const projectStage: ProjectStage[] = await AppDatasource.manager.find(ProjectStage)
  
    const convertedProjectStage = projectStage.map((projectstage) => {
  
      const convertDescription = Buffer.from(projectstage.description).toString('utf-8')
  
      return ({...projectstage, description: convertDescription})
    });
    
    return  convertedProjectStage
  }
  
  
  export const findOne = async (id: string) => {
      const param: FindOneOptions = { where: [{ id: id }] }
    
      const projectStage: ProjectStage = await AppDatasource.manager.findOne(ProjectStage, param)
  
      const convertDescription = Buffer.from(projectStage.description).toString('utf-8')
    
      return ({...projectStage, description: convertDescription})
    }