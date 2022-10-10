import * as path from 'path'
import { DataSource } from 'typeorm'

const entitiesPath = path.resolve(__dirname, '..', 'entities', '*')

const migrationsPath = path.resolve(__dirname, '..', 'migrations', '*')

export const AppDatasource = new DataSource({
  type: 'mariadb',
  database: 'suportfly',
  host: 'suportfly.cpmlurcuqtoj.us-east-1.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'masterkey',
  entities: [entitiesPath],
  migrations: [migrationsPath]
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
