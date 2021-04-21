import { Response, Request } from 'express'
import { container } from 'tsyringe'

import { CreateMessageUseCase } from './CreateMessageUseCase'

export class CreateMessageController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { text, user_id, admin_id } = request.body
      const createMessage = container.resolve(CreateMessageUseCase)
      const newMessage = await createMessage.execute({
        text,
        user_id,
        admin_id,
      })
      return response.status(200).json(newMessage)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
