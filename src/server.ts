import { Express } from 'express'
import { createExpressServer, RoutingControllersOptions } from 'routing-controllers'
import * as path from 'path'
import { connectDb } from './database/databaseConnection'

const controllerPath = path.resolve(__dirname, 'api', 'routes', '**', 'controller.*')

const serverConfigs: RoutingControllersOptions = {
  cors: '*',
  defaultErrorHandler: true,
  controllers: [controllerPath],
  defaults: {
    paramOptions: {
      required: true
    }
  }
}



const app: Express = createExpressServer(serverConfigs)

export const server = async () => {
  console.log('----------------------------------Please wait, starting server---------------------------------------------')

  await connectDb()

  return app
}


app.get('/', (req, res) => res.send('Welcome to Suportfly API'))