import { Service, ServiceConfig } from 'node-windows'
import { EventLogger } from 'node-windows'

const serviceLog = new EventLogger()

const options: ServiceConfig = {
  name: 'Intergalactic API',
  description: 'API REST',
  script: './dist/src/index.js'
}


export const srv = () => {
  const srv = new Service(options)

  srv.on('install', () => {
    srv.start()
    console.log('Intergalactic API service installed!')
    serviceLog.info('Intergalactic API service installed!')
  })

  return srv
}

srv().install()
