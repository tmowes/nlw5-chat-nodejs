import { CreateUserDTO } from '../dtos/CreateUserDTO'
import { User } from '../infra/typeorm/entities/User'

export interface IUsersRepository {
  create: (data: CreateUserDTO) => Promise<User>
  findByEmail: (email: string) => Promise<User | undefined>
  findById: (id: string) => Promise<User>
}
