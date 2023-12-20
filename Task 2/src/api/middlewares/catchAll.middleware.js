import {RouteNotFound} from '../errors/errors.js'

export const catchAllMiddleware = (req, res, next) => {
  const error = new RouteNotFound('Route Not Found')
  next(error)
}
