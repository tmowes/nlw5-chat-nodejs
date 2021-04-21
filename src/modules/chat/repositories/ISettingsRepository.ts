import { CreateSettingDTO } from '../dtos/CreateSettingDTO'
import { Setting } from '../infra/typeorm/entities/Setting'

export interface ISettingsRepository {
  create: (data: CreateSettingDTO) => Promise<Setting>
  findByUserName: (username: string) => Promise<Setting | undefined>
  // findById: (user_id: string) => Promise<User | undefined>
  // send: (message: string) => Promise<ISendResponseDTO>
}
