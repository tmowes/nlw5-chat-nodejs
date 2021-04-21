import { CreateSettingDTO } from '@modules/chat/dtos/CreateSettingDTO'
import { Setting } from '@modules/chat/infra/typeorm/entities/Setting'
import { ISettingsRepository } from '@modules/chat/repositories/ISettingsRepository'
import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/errors/AppError'

@injectable()
export class CreateSettingUseCase {
  constructor(
    @inject('SettingsRepository')
    private settingsRepository: ISettingsRepository
  ) {}

  async execute(data: CreateSettingDTO): Promise<Setting> {
    const settingExists = await this.settingsRepository.findByUserName(
      data.username
    )

    if (settingExists) {
      throw new AppError('Username already exists!', 400)
    }
    const newSetting = this.settingsRepository.create({ ...data })
    return newSetting
  }
}
