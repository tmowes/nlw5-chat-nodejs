import { CreateUserController } from '@modules/chat/useCases/createUser'
import { Router } from 'express'

const usersRouter = Router()
const createUserController = new CreateUserController()

usersRouter.post('/', createUserController.handle)

export { usersRouter }
