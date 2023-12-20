import request from 'supertest'
import express from 'express'
import {rateLimitMiddleware} from '../rateLimiter.middleware.js'
import {describe, expect, it} from '@jest/globals'

const app = express()
app.use(rateLimitMiddleware)
app.get('/', (req, res) => res.send('Hello World'))

describe('Rate Limit Middleware', () => {
  it('should allow requests within rate limit', async () => {
    for (let i = 0; i < 5; i++) {
      const response = await request(app).get('/')
      expect(response.status).toBe(200)
      expect(response.text).toBe('Hello World')
    }
  })

  it('should block requests exceeding rate limit', async () => {
    for (let i = 0; i < 5; i++) {
      await request(app).get('/')
    }

    const response = await request(app).get('/')
    expect(response.status).toBe(429)
    expect(response.body).toEqual({message: 'You have exceeded your 5 requests per minute limit.'})
  })
})
