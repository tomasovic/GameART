export class RouteNotFound extends Error {
  constructor(message) {
    super(message)
    this.name = 'RouteNotFound'
    this.message = message
  }
}

export class BadRequest extends Error {
  constructor(message) {
    super(message)
    this.name = 'BadRequest'
    this.message = message
  }
}

export class ServiceUnavailable extends Error {
  constructor(message) {
    super(message)
    this.name = 'ServiceUnavailable'
    this.message = message
  }
}
