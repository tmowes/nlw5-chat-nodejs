import { usersTableName } from '@modules/chat/infra/typeorm/entities/User'
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

import { idColumn, timestampColumns } from './utils'

export class CreateUsers1619034369147 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: usersTableName,
        columns: [
          idColumn,
          {
            name: 'email',
            type: 'varchar',
          },
          ...timestampColumns,
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(usersTableName)
  }
}
