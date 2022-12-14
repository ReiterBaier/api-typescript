import { AppDatasource } from '../../../config/databaseConnection'
import { User } from '../../../entities/user'
import { FindOneOptions } from 'typeorm'
import { userValitador } from './request'



/* get all users */
export const findAll = async () => {
  return AppDatasource.manager.find(User)
}

/* get one user */
export const findOne = async (id: string) => {
  const param: FindOneOptions = { where: [{ id: id }] }

  const user: User = await AppDatasource.manager.findOne(User, param)

  return user
}


/* create a new user */
export const save = async (user: User, userRequest: userValitador, id?: number) => {
  user.email = userRequest.email
  user.password = userRequest.password
  user.name = userRequest.name
  user.token = userRequest.token

  const createdUser = await AppDatasource.manager.save(User, user)

  return createdUser.id !== id ? { id: createdUser.id } : undefined
}


export const create = async (userRequest: userValitador) => {
  const user = new User()

  return save(user, userRequest)
}





/* update existing user */
export const findOrNewInstance = async (id: number) => {
const filter: FindOneOptions = { where: { id: id } }

const foundedUser = await AppDatasource.manager.findOne(User, filter)
return foundedUser || new User()
}

export const update = async (userRequest: userValitador, id: number) => {
const user = await findOrNewInstance(id)
return save(user, userRequest)
}