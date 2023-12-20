import {Router} from 'express'
import ping from './ping.routes.js'

const routes = Router()

routes.use('/ping', ping)

export default routes
