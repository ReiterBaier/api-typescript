import { makeToken } from '../../token/jsonwebtoken'
import { AppDatasource } from '../../../config/databaseConnection'
import { User } from '../../../entities/user'
import { FindOneOptions } from 'typeorm'



export const authService = async (email: string, password: string) => {
    const param: FindOneOptions = { where: [{ email: email, password: password }] }
    const Authuser: User = await AppDatasource.manager.findOne(User, param)
    const token = await makeToken(Authuser)
    return {"token": token}
  }
  
  