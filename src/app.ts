import 'reflect-metadata'
import 'express-async-errors'

import cors from 'cors'
import express, { json, Request, Response, NextFunction } from 'express'

import './shared/container'
import { router } from './routes'
import { AppError } from './shared/errors/AppError'
import './shared/infra/typeorm'

const app = express()

app.use(cors())
app.use(json())

app.use('/api/v1', router)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _: Request, response: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message} `,
  })
})

export { app }
