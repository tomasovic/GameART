import {PingService} from '../../services/ping/ping.service.js'
import {BadRequest} from '../../errors/errors.js'

export class PingController {
  pingService

  constructor() {
    this.pingService = new PingService()
  }

  ping = async (req, res, next) => {
    if (req === undefined) {
      throw new BadRequest('Bad request')
    }

    try {
      const pong = await this.pingService.ping()
      res.status(201).send({message: pong})
    } catch (error) {
      next(error)
    }
  }
}
