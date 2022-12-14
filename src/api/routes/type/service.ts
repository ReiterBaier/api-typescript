import { AppDatasource } from '../../../config/databaseConnection'
import { Type } from '../../../entities/type'
import { FindOneOptions } from 'typeorm'
import { typeValitador } from './request'

/* Get all types */
export const findAll = async () => {
    return AppDatasource.manager.find(Type)
}

/* Get type by id */
export const findOne = async (id: string) => {
    const param: FindOneOptions = { where: [{ id: id }] }
  
    const types: Type = await AppDatasource.manager.findOne(Type, param)
  
    return types
  }


  
/* create a new type */
export const save = async (type: Type, typeRequest: typeValitador, id?: number) => {
    type.name = typeRequest.name
    type.focus = typeRequest.focus
  
    const createdType = await AppDatasource.manager.save(Type, type)
  
    return createdType.id !== id ? { id: createdType.id } : undefined
  }
  
  
  export const create = async (typeRequest: typeValitador) => {
    const type = new Type()
  
    return save(type, typeRequest)
  }
  
  
  
  
  
  /* update existing type */
  export const findOrNewInstance = async (id: number) => {
  const param: FindOneOptions = { where: { id: id } }
  
  const searchType = await AppDatasource.manager.findOne(Type, param)
  return searchType || new Type()
  }
  
  export const update = async (typeRequest: typeValitador, id: number) => {
  const type = await findOrNewInstance(id)
  return save(type, typeRequest)
  }