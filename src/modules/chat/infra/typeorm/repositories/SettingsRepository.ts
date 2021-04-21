import { CreateSettingDTO } from '@modules/chat/dtos/CreateSettingDTO'
import { ISettingsRepository } from '@modules/chat/repositories/ISettingsRepository'
import { getRepository, Repository } from 'typeorm'

import { Setting } from '../entities/Setting'

export class SettingsRepository implements ISettingsRepository {
  private repository: Repository<Setting>
  constructor() {
    this.repository = getRepository(Setting)
  }

  async create(data: CreateSettingDTO): Promise<Setting> {
    const setting = this.repository.create(data)
    await this.repository.save(setting)
    return setting
  }

  // async list(): Promise<Setting[]> {
  //   const allSpecifications = await this.repository.find()
  //   return allSpecifications
  // }

  async findByUserName(username: string): Promise<Setting> {
    const setting = await this.repository.findOne({ username })
    return setting
  }

  // async findByIds(ids: string[]): Promise<Setting[]> {
  //   const specificationsIds = await this.repository.findByIds(ids)
  //   return specificationsIds
  // }
}
