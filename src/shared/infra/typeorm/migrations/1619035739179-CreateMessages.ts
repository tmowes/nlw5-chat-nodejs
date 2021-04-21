import { messagesTableName } from '@modules/chat/infra/typeorm/entities/Message'
import { usersTableName } from '@modules/chat/infra/typeorm/entities/User'
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

import { idColumn, timestampColumns } from './utils'

export class CreateMessages1619035739179 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: messagesTableName,
        columns: [
          idColumn,
          {
            name: 'admin_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'text',
            type: 'varchar',
          },
          ...timestampColumns,
        ],
        foreignKeys: [
          {
            name: 'FKUserMessages',
            referencedTableName: usersTableName,
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(messagesTableName)
  }
}
