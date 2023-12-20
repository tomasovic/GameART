import {BadRequest, RouteNotFound, ServiceUnavailable} from '../errors.js'
import {describe, expect, it} from '@jest/globals'

describe('Custom Error Classes', () => {
  it('RouteNotFound should set the correct name and message', () => {
    const message = 'Route not found'
    const error = new RouteNotFound(message)
    expect(error.name).toBe('RouteNotFound')
    expect(error.message).toBe(message)
  })

  it('BadRequest should set the correct name and message', () => {
    const message = 'Bad request error'
    const error = new BadRequest(message)
    expect(error.name).toBe('BadRequest')
    expect(error.message).toBe(message)
  })

  it('ServiceUnavailable should set the correct name and message', () => {
    const message = 'Service unavailable'
    const error = new ServiceUnavailable(message)
    expect(error.name).toBe('ServiceUnavailable')
    expect(error.message).toBe(message)
  })
})
