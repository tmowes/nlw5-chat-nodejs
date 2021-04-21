import { MessagesRepository } from '@modules/chat/infra/typeorm/repositories/MessagesRepository'
import { SettingsRepository } from '@modules/chat/infra/typeorm/repositories/SettingsRepository'
import { UsersRepository } from '@modules/chat/infra/typeorm/repositories/UsersRepository'
import { IMessagesRepository } from '@modules/chat/repositories/IMessagesRepository'
import { ISettingsRepository } from '@modules/chat/repositories/ISettingsRepository'
import { IUsersRepository } from '@modules/chat/repositories/IUsersRepository'
import { container } from 'tsyringe'

container.registerSingleton<ISettingsRepository>(
  'SettingsRepository',
  SettingsRepository
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IMessagesRepository>(
  'MessagesRepository',
  MessagesRepository
)
