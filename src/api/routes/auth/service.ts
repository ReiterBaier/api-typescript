import { AppDatasource } from '../../../config/databaseConnection'
import { User } from '../../../entities/user'
import { FindOneOptions } from 'typeorm'


export const authService = async (username: string, password: string) => {
    const param: FindOneOptions = { where: [{ username: username, password: password }] }
  
    const Authuser: User = await AppDatasource.manager.findOne(User, param)
  
    return Authuser
  }
  
  