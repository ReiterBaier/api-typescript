import { AppDatasource } from '../../../database/databaseConnection'
import { Task } from '../../../entities/task'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Task)
}


export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const tasks: Task = await AppDatasource.manager.findOne(Task, param)
  
    return tasks
  }
  

/*
  export const createTravel = async (req, res) => {
    try {
      const travel = new travelModel(req.body)
      await travel.save()
      return res.status(201).json(travel) 
    } catch(error) {
      res.status(400).send({error: error.message})
    }
  }
*/