import { AppDatasource } from '../../../database/databaseConnection'
import { User } from '../../../entities/users'
import { FindOneOptions } from 'typeorm'


export const findOne = async (username: string, password: string) => {
  const param: FindOneOptions = { where: [{ username: username }, {password: password}] }

  const user: User = await AppDatasource.manager.findOne(User, param)

  return {token: user.token} 
}


