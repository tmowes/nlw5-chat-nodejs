import { CreateUserDTO } from '@modules/chat/dtos/CreateUserDTO'
import { User } from '@modules/chat/infra/typeorm/entities/User'
import { IUsersRepository } from '@modules/chat/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(data.email)

    if (userExists) {
      return userExists
    }

    const newUser = this.usersRepository.create({ ...data })
    return newUser
  }
}
