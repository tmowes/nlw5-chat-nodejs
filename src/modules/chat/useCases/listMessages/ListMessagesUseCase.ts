import { ListMessagesDTO } from '@modules/chat/dtos/ListMessagesDTO'
import { Message } from '@modules/chat/infra/typeorm/entities/Message'
import { IMessagesRepository } from '@modules/chat/repositories/IMessagesRepository'
import { IUsersRepository } from '@modules/chat/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/errors/AppError'

@injectable()
export class ListMessagesUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository
  ) {}

  async execute(data: ListMessagesDTO): Promise<Message[]> {
    const userExists = await this.usersRepository.findById(data.user_id)

    if (!userExists) {
      throw new AppError('User not found!', 400)
    }

    const messages = await this.messagesRepository.findByUser(data.user_id)

    if (messages.length === 0) {
      throw new AppError('No messages found!', 400)
    }

    return messages
  }
}
