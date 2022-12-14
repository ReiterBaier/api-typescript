import { AppDatasource } from '../../../config/databaseConnection'
import { Plataform } from '../../../entities/plataform'
import { FindOneOptions } from 'typeorm'
import { plataformValidator } from './request'

/* get all plataforms */
export const findAll = async () => {
    return AppDatasource.manager.find(Plataform)
}

/* get plataform by id */
export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const client: Plataform = await AppDatasource.manager.findOne(Plataform, param)
  
    return client
  }

   

/* create a new client */
 export const save = async (plataform: Plataform, plataformRequest: plataformValidator, id?: number) => {
    plataform.name = plataformRequest.name
    plataform.document = plataformRequest.document
  
    const createdPlataform = await AppDatasource.manager.save(Plataform, plataform)
  
    return createdPlataform.id !== id ? { id: createdPlataform.id } : undefined
  }


  export const create = async (plataformRequest: plataformValidator) => {
    const plataform = new Plataform()
  
    return save(plataform, plataformRequest)
  }





/* update existing project */
export const findOrNewInstance = async (id: number) => {
  const param: FindOneOptions = { where: { id: id } }

  const searchPlataform = await AppDatasource.manager.findOne(Plataform, param)
  return searchPlataform || new Plataform()
}

export const update = async (plataformRequest: plataformValidator, id: number) => {
  const plataform = await findOrNewInstance(id)
  return save(plataform, plataformRequest)
}



  