import {BadRequest, RouteNotFound, ServiceUnavailable} from '../errors/errors.js'

export const handleErrorMiddleware = (error, _, res, next) => {
  const {message} = error

  function errorResponse(status, name) {
    res.status(status).send({name, message})
  }

  switch (error.constructor) {
    case RouteNotFound:
      errorResponse(404, error.name)
      break
    case BadRequest:
      errorResponse(400, error.name)
      break
    case ServiceUnavailable:
      errorResponse(503, error.name)
      break
    case Error:
      errorResponse(500, error.name)
      break
    default:
      next(error)
  }
}
