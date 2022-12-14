import { AppDatasource } from '../../../config/databaseConnection'
import { Client } from '../../../entities/client'
import { FindOneOptions } from 'typeorm'
import { clientValitador } from './request'

/* get all clients */
export const findAll = async () => {
    return AppDatasource.manager.find(Client)
}


/* get client by id */
export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const client: Client = await AppDatasource.manager.findOne(Client, param)
  
    return client
  }

  

/* create a new client */
 export const save = async (client: Client, clientRequest: clientValitador, id?: number) => {
    client.name = clientRequest.name
    client.document = clientRequest.document
    client.token = clientRequest.token
  
    const createdClient = await AppDatasource.manager.save(Client, client)
  
    return createdClient.id !== id ? { id: createdClient.id } : undefined
  }


  export const create = async (clientRequest: clientValitador) => {
    const client = new Client()
  
    return save(client, clientRequest)
  }





/* update existing project */
export const findOrNewInstance = async (id: number) => {
  const param: FindOneOptions = { where: { id: id } }

  const searchClient = await AppDatasource.manager.findOne(Client, param)
  return searchClient || new Client()
}

export const update = async (clientRequest: clientValitador, id: number) => {
  const client = await findOrNewInstance(id)
  return save(client, clientRequest)
}


