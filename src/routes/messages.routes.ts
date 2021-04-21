import { CreateMessageController } from '@modules/chat/useCases/createMessage'
import { ListMessagesController } from '@modules/chat/useCases/listMessages'
import { Router } from 'express'

const messagesRouter = Router()
const createMessageController = new CreateMessageController()
const listMessagesController = new ListMessagesController()

messagesRouter.post('/', createMessageController.handle)
messagesRouter.get('/:user_id', listMessagesController.handle)

export { messagesRouter }
