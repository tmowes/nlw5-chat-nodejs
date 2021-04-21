import { settingsTableName } from '@modules/chat/infra/typeorm/entities/Setting'
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

import { idColumn, timestampColumns } from './utils'

export class CreateSettings1618954981293 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: settingsTableName,
        columns: [
          idColumn,
          {
            name: 'username',
            type: 'varchar',
          },
          {
            name: 'chat',
            type: 'boolean',
            default: true,
          },
          ...timestampColumns,
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(settingsTableName)
  }
}
