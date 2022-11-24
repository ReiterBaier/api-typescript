import { AppDatasource } from '../../../config/databaseConnection'
import { ProjectStage } from '../../../entities/projectStage'


  export const findAll = async () => {

    const projectStage: ProjectStage[] = await AppDatasource.manager.find(ProjectStage)
  
    const convertedProjectStage = projectStage.map((projectstage) => {
  
      const convertDescription = Buffer.from(projectstage.description).toString('utf-8')
  
      return ({...projectstage, description: convertDescription})
    });
    
    return  convertedProjectStage
  }
