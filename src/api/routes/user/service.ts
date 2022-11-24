import { AppDatasource } from '../../../config/databaseConnection'
import { User } from '../../../entities/user'
import { FindOneOptions } from 'typeorm'



export const findAll = async () => {
  return AppDatasource.manager.find(User)
}

export const findOne = async (id: string) => {
  const param: FindOneOptions = { where: [{ id: id }] }

  const user: User = await AppDatasource.manager.findOne(User, param)

  return user
}
