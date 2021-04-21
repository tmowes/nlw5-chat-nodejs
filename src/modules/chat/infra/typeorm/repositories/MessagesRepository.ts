import { CreateMessageDTO } from '@modules/chat/dtos/CreateMessageDTO'
import { IMessagesRepository } from '@modules/chat/repositories/IMessagesRepository'
import { getRepository, Repository } from 'typeorm'

import { Message } from '../entities/Message'

export class MessagesRepository implements IMessagesRepository {
  private repository: Repository<Message>
  constructor() {
    this.repository = getRepository(Message)
  }

  async create(data: CreateMessageDTO): Promise<Message> {
    const user = this.repository.create(data)
    await this.repository.save(user)
    return user
  }

  async findById(id: string): Promise<Message> {
    const user = await this.repository.findOne(id)
    return user
  }

  async findByUser(user_id: string): Promise<Message[]> {
    const messages = await this.repository.find({
      where: { user_id },
      relations: ['user'],
    })
    return messages
  }
}
