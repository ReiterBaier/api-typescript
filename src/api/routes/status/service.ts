import { AppDatasource } from '../../../database/databaseConnection'
import { Status } from '../../../entities/status'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Status)
}

export const findWithFilter = async (focus: string) => {
    const param: FindOneOptions = { where: [{ focus: focus }] }
  
    const status: Status = await AppDatasource.manager.findOne(Status, param)
  
    return status
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


