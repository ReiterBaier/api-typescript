import { AppDatasource } from '../../../database/databaseConnection'
import { Task } from '../../../entities/task'
import { FindOneOptions } from 'typeorm'

export const findAll = async () => {
    return AppDatasource.manager.find(Task)
}


export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const task: Task = await AppDatasource.manager.findOne(Task, param)

    const convertDescription = Buffer.from(task.description).toString('utf-8')
  
    return ({...task, description: convertDescription})
  }
  
/*
import { AppDatasource } from '../../../database/databaseConnection'
import { ClientScript } from '../../../entities/clientScript'
import { FindOneOptions } from 'typeorm'


export const findOne = async (token: string) => {
    const param: FindOneOptions = { where: [{ token: token }] }
  
    const clientScript: ClientScript = await AppDatasource.manager.findOne(ClientScript, param)

    const convertScript = Buffer.from(clientScript.script).toString('utf8');

    return ({...clientScript, script: convertScript});
  }
*/

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