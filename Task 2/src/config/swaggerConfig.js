import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import config from './config.js'

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'GameART challenge',
      version: '0.1.0',
      description: 'This is a simple boilerplate for GameART task made with Express and documented with' +
        ' Swagger',
    },
    servers: [
      {
        url: `http://localhost:${config.APP_PORT}`,
      },
    ],
  },
  apis: ['./src/api/routes/v1/*.routes.js'],
}

const swaggerSpec = swaggerJsdoc(options)

const swaggerDocs = (app) => {
  // Swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Docs in JSON format
  app.get('/docs.json', (_, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  console.log(`Swagger is available on http://localhost:${config.APP_PORT}/docs`)
}

export default swaggerDocs
