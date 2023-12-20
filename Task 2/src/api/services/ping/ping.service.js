import {ServiceUnavailable} from '../../errors/errors.js'

export class PingService {
  ping = (shouldReject = false) => {
    if (shouldReject) {
      return Promise.reject(new ServiceUnavailable('Service unavailable'))
    }
    return Promise.resolve('pong')
  }
}
