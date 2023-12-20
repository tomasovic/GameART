import {handleErrorMiddleware} from '../errorHandler.middleware.js'
import {BadRequest, RouteNotFound, ServiceUnavailable} from '../../errors/errors.js'
import {describe, expect, it, jest} from '@jest/globals'

describe('handleErrorMiddleware', () => {
  const mockSend = jest.fn()
  const mockStatus = jest.fn().mockReturnValue({send: mockSend})
  const res = {status: mockStatus}
  const next = jest.fn()

  it('should handle RouteNotFound error', () => {
    const error = new RouteNotFound('Route not found')
    handleErrorMiddleware(error, null, res, next)
    expect(mockStatus).toHaveBeenCalledWith(404)
    expect(mockSend).toHaveBeenCalledWith({name: 'RouteNotFound', message: 'Route not found'})
  })

  it('should handle BadRequest error', () => {
    const error = new BadRequest('Bad request')
    handleErrorMiddleware(error, null, res, next)
    expect(mockStatus).toHaveBeenCalledWith(400)
    expect(mockSend).toHaveBeenCalledWith({name: 'BadRequest', message: 'Bad request'})
  })

  it('should handle ServiceUnavailable error', () => {
    const error = new ServiceUnavailable('Service Unavailable')
    handleErrorMiddleware(error, null, res, next)
    expect(mockStatus).toHaveBeenCalledWith(503)
    expect(mockSend).toHaveBeenCalledWith({name: 'ServiceUnavailable', message: 'Service Unavailable'})
  })

  it('should handle generic Error', () => {
    const error = new Error('Generic error')
    handleErrorMiddleware(error, null, res, next)
    expect(mockStatus).toHaveBeenCalledWith(500)
    expect(mockSend).toHaveBeenCalledWith({name: 'Error', message: 'Generic error'})
  })

  it('should call next for unhandled error types', () => {
    const error = {message: 'Unknown error', name: 'UnknownError'}
    handleErrorMiddleware(error, null, res, next)
    expect(next).toHaveBeenCalledWith(error)
  })
})
