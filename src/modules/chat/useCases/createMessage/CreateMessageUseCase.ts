import { CreateMessageDTO } from '@modules/chat/dtos/CreateMessageDTO'
import { Message } from '@modules/chat/infra/typeorm/entities/Message'
import { IMessagesRepository } from '@modules/chat/repositories/IMessagesRepository'
import { IUsersRepository } from '@modules/chat/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/errors/AppError'

@injectable()
export class CreateMessageUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository
  ) {}

  async execute(data: CreateMessageDTO): Promise<Message> {
    const userExists = await this.usersRepository.findById(data.user_id)

    if (!userExists) {
      throw new AppError('User not found!', 400)
    }
    const newMessage = this.messagesRepository.create({ ...data })

    return newMessage
  }
}
