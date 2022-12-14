import { AppDatasource } from '../../../config/databaseConnection'
import { Status } from '../../../entities/status'
import { FindOneOptions } from 'typeorm'
import { statusValitador } from './request'


/* Get all status */
export const findAll = async () => {
    return AppDatasource.manager.find(Status)
}

/* Get status by id */
export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const status: Status = await AppDatasource.manager.findOne(Status, param)
  
    return status
  }

  
/* create a new status */
export const save = async (status: Status, statusRequest: statusValitador, id?: number) => {
  status.name = statusRequest.name
  status.focus = statusRequest.focus

  const createdStatus = await AppDatasource.manager.save(Status, status)

  return createdStatus.id !== id ? { id: createdStatus.id } : undefined
}


export const create = async (statusRequest: statusValitador) => {
  const status = new Status()

  return save(status, statusRequest)
}





/* update existing status */
export const findOrNewInstance = async (id: number) => {
const filter: FindOneOptions = { where: { id: id } }

const foundedStatus = await AppDatasource.manager.findOne(Status, filter)
return foundedStatus || new Status()
}

export const update = async (statusRequest: statusValitador, id: number) => {
const status = await findOrNewInstance(id)
return save(status, statusRequest)
}

