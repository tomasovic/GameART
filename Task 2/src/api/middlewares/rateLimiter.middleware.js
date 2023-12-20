import setRateLimit from 'express-rate-limit'

export const rateLimitMiddleware = setRateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {message: 'You have exceeded your 5 requests per minute limit.'},
  headers: true,
})

