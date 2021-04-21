import { CreateMessageDTO } from '../dtos/CreateMessageDTO'
import { Message } from '../infra/typeorm/entities/Message'

export interface IMessagesRepository {
  create: (data: CreateMessageDTO) => Promise<Message>
  findById: (id: string) => Promise<Message>
  findByUser: (user_id: string) => Promise<Message[]>
}
