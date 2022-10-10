import { AppDatasource } from '../../../database/databaseConnection'
import { User } from '../../../entities/user'
import { FindOneOptions } from 'typeorm'


export const findOne = async (username: string, password: string) => {
  const param: FindOneOptions = { where: [{ username: username, password: password }] }

  const user: User = await AppDatasource.manager.findOne(User, param)

  return {id: user.id} 
}


