import { AppDatasource } from '../../../database/databaseConnection'
import { Stage } from '../../../entities/stage'


export const findWithFilter = async (integrationId: string) => {
    const param = { where: [{ integrationId: integrationId }] }
  
    const stage: Stage = await AppDatasource.manager.find(Stage, param)

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
