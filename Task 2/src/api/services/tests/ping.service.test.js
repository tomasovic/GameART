import {PingService} from '../ping/ping.service.js'
import {ServiceUnavailable} from '../../errors/errors.js'
import {beforeEach, describe, expect, it} from '@jest/globals'

describe('PingService', () => {
  let pingService

  beforeEach(() => {
    pingService = new PingService()
  })

  it('should resolve with "pong" when shouldReject is false', async () => {
    await expect(pingService.ping()).resolves.toBe('pong')
  })

  it('should reject with ServiceUnavailable when shouldReject is true', async () => {
    await expect(pingService.ping(true)).rejects.toThrow(ServiceUnavailable)
  })
})
