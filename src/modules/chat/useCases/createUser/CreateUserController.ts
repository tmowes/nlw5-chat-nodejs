import { Response, Request } from 'express'
import { container } from 'tsyringe'

import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.body
      const createUser = container.resolve(CreateUserUseCase)
      const newUser = await createUser.execute({ email })
      return response.status(200).json(newUser)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
