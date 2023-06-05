import * as path from 'path'
import { DataSource } from 'typeorm'

const entitiesPath = path.resolve(__dirname, '..', 'entities', '*')

const migrationsPath = path.resolve(__dirname, '..', 'migrations', '*')

export const AppDatasource = new DataSource({
  type: 'mariadb',
  database: 'database_name',
  host: 'put_the_host_here',
  port: 0,
  username: 'username',
  password: 'password',
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
