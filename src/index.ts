import { server } from './server'

const PORT = process.env.PORT || 3333

server().then(app => {
  app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
})
