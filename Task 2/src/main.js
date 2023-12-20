import config from './config/config.js'
import http from 'http'
import {setupServer} from './server/server.js'
import {catchAllMiddleware} from './api/middlewares/catchAll.middleware.js'
import {handleErrorMiddleware} from './api/middlewares/errorHandler.middleware.js'

const bootstrap = async () => {
  const app = setupServer()
  const port = config.APP_PORT

  app.get('/', (_, res) => {
    res.send(`Listening on port: ${port}`)
  })

  app.use(catchAllMiddleware)
  app.use(handleErrorMiddleware)

  const server = http.createServer(app)
  server.listen(port)

  console.log(`App started. Listening on port: ${port}`)

  return server
}

bootstrap()
