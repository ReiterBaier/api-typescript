import * as path from 'path'
import { DataSource } from 'typeorm'

const entitiesPath = path.resolve(__dirname, '..', 'entities', '*')

export const AppDatasource = new DataSource({
  type: 'mariadb',
  database: 'fsis_project',
  host: 'fsis-db.cn30ieaycffi.us-east-1.rds.amazonaws.com',
  port: 9630,
  username: 'admin',
  password: 'dY&^3ODl^wolj!Jt3YiT',
  entities: [entitiesPath]
})

export const connectDb = async () => {
  await AppDatasource.initialize()
    .then(() => {
      console.log('connection with database inicialized')
    })
    .catch(error => {
      console.log(error)
    })
}
