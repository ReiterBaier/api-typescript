import { AppDatasource } from '../../../config/databaseConnection'
import { Stage } from '../../../entities/stage'
import { FindOneOptions } from 'typeorm'


  export const findAll = async () => {

    const stages: Stage[] = await AppDatasource.manager.find(Stage)
  
    const convertedStage = stages.map((stage) => {
  
      const convertDescription = Buffer.from(stage.description).toString('utf-8')
  
      return ({...stage, description: convertDescription})
    });
    
    return  convertedStage
  }
  
  
  export const findOne = async (id: string) => {
      const param: FindOneOptions = { where: [{ id: id }] }
    
      const stage: Stage = await AppDatasource.manager.findOne(Stage, param)
  
      const convertDescription = Buffer.from(stage.description).toString('utf-8')
    
      return ({...stage, description: convertDescription})
    }