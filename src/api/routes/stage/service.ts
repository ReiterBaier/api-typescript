import { AppDatasource } from '../../../database/databaseConnection'
import { Stage } from '../../../entities/stage'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Stage)
}


  export const findWithFilter = async (focus: string) => {
    const param: FindOneOptions = { where: [{ focus: focus }] }
  
    const stage: Stage = await AppDatasource.manager.findOne(Stage, param)
  
    return stage
  }





  /*
  export const createTravel = async (req, res) => {
    try {
      const travel = new travelModel(req.body)
      await travel.save()
      return res.status(200).json(travel) 
    } catch(error) {
      res.status(400).send({error: error.message})
    }
  }


*/
