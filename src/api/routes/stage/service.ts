import { AppDatasource } from '../../../config/databaseConnection'
import { Stage } from '../../../entities/stage'
import { FindOneOptions } from 'typeorm'
import { stageValitador } from './request'

/* get all stages */
  export const findAll = async () => {

    const stages: Stage[] = await AppDatasource.manager.find(Stage)
  
    const convertedStage = stages.map((stage) => {
  
      const convertDescription = Buffer.from(stage.description).toString('utf-8')
  
      return ({...stage, description: convertDescription})
    });
    
    return  convertedStage
  }
  
  /* get stage by id */
  export const findOne = async (id: string) => {
      const param: FindOneOptions = { where: [{ id: id }] }
    
      const stage: Stage = await AppDatasource.manager.findOne(Stage, param)
  
      const convertDescription = Buffer.from(stage.description).toString('utf-8')
    
      return ({...stage, description: convertDescription})
    }


    
/* create a new stage */
export const save = async (stage: Stage, stageRequest: stageValitador, id?: number) => {
  stage.name = stageRequest.name
  stage.description = stageRequest.description
  stage.weight = stageRequest.weight

  const createdStage = await AppDatasource.manager.save(Stage, stage)

  return createdStage.id !== id ? { id: createdStage.id } : undefined
}


export const create = async (stageRequest: stageValitador) => {
  const stage = new Stage()

  return save(stage, stageRequest)
}





/* update existing stage */
export const findOrNewInstance = async (id: number) => {
const param: FindOneOptions = { where: { id: id } }

const searchStage = await AppDatasource.manager.findOne(Stage, param)
return searchStage || new Stage()
}

export const update = async (stageRequest: stageValitador, id: number) => {
const stage = await findOrNewInstance(id)
return save(stage, stageRequest)
}

