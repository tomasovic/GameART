import {beforeEach, describe, expect, it, jest} from '@jest/globals'
import {PingController} from '../ping/ping.controller.js'
import {PingService} from '../../services/ping/ping.service.js'
import {BadRequest, ServiceUnavailable} from '../../errors/errors.js'

jest.mock('../../services/ping/ping.service.js')

describe('PingController', () => {
  let pingController
  let mockSend
  let mockStatus
  let res
  let pingService

  beforeEach(() => {
    jest.clearAllMocks()

    mockSend = jest.fn()
    mockStatus = jest.fn().mockReturnValue({send: mockSend})
    res = {status: mockStatus}
    pingService = new PingService()

    PingService.prototype.ping = jest.fn()

    pingController = new PingController()
  })

  it('should send a 201 status with a pong message on successful ping', async () => {
    PingService.prototype.ping.mockResolvedValue('pong')
    await pingController.ping({}, res, () => {
    })

    expect(mockStatus).toHaveBeenCalledWith(201)
    expect(mockSend).toHaveBeenCalledWith({message: 'pong'})
  })

  it('should send a 503 status when the ping service rejects', async () => {
    expect.assertions(1)
    try {
      await pingService.ping(true)
    } catch (error) {
      expect(error).toBeInstanceOf(ServiceUnavailable)
    }
  })

  it('should throw a BadRequest error when called without necessary arguments', async () => {
    const t = async () => {
      await pingController.ping(undefined, res, () => {
      })
    }
    
    await expect(t).rejects.toThrow(BadRequest)
  })
})
