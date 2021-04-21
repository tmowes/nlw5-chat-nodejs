import { Response, Request } from 'express'
import { container } from 'tsyringe'

import { CreateSettingUseCase } from './CreateSettingUseCase'

export class CreateSettingController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { username, chat } = request.body
      const createSetting = container.resolve(CreateSettingUseCase)
      const newSetting = await createSetting.execute({ username, chat })
      return response.status(200).json(newSetting)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
