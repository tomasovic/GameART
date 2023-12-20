import {catchAllMiddleware} from '../catchAll.middleware.js'
import {RouteNotFound} from '../../errors/errors.js'
import {describe, expect, it, jest} from '@jest/globals'

describe('catchAllMiddleware', () => {
  it('should create a RouteNotFound error and pass it to next', () => {
    const req = {}
    const res = {}
    const next = jest.fn()

    catchAllMiddleware(req, res, next)

    expect(next).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith(expect.any(RouteNotFound))
    expect(next.mock.calls[0][0].message).toBe('Route Not Found')
  })
})
