import { server } from './server'

server().then(app => {
  app.listen(3333, () => console.log('server is running on port 3333'))
})
