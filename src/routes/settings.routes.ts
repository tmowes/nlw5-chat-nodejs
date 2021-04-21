import { CreateSettingController } from '@modules/chat/useCases/createSetting'
import { Router } from 'express'

const settingsRouter = Router()
const createSettingController = new CreateSettingController()

settingsRouter.post('/', createSettingController.handle)

export { settingsRouter }
