import express from 'express'
import swaggerDocs from '../config/swaggerConfig.js'
import v1 from '../api/routes/v1/index.js'
import {rateLimitMiddleware} from '../api/middlewares/rateLimiter.middleware.js'

export const setupServer = () => {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.use(rateLimitMiddleware)

  app.use('/api/v1', v1)

  swaggerDocs(app)
  return app
}
