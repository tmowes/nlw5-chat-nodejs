import { Response, Request } from 'express'
import { container } from 'tsyringe'

import { ListMessagesUseCase } from './ListMessagesUseCase'

export class ListMessagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.params
      const listMessages = container.resolve(ListMessagesUseCase)
      const newMessage = await listMessages.execute({ user_id })
      return response.status(200).json(newMessage)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
