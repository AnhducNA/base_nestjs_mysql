import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createVideosTable1730478347502 implements MigrationInterface {
  name = 'createVideosTable1730478347502';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'videos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'task_id',
            type: 'varchar(255)',
            isUnique: true,
          },
          {
            name: 'user_id',
            type: 'integer',
          },
          {
            name: 'link',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'varchar(255)',
            isNullable: true,
            default: 'pending',
          },
          {
            name: 'created_at',
            type: 'datetime',
          },
          {
            name: 'updated_at',
            type: 'datetime',
            isNullable: true,
          },
        ],
        uniques: [
          {
            name: 'task_id_unique',
            columnNames: ['task_id'],
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'videos',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('videos');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('user_id') !== -1,
    );
    await queryRunner.dropForeignKey('videos', foreignKey);
    await queryRunner.dropTable('videos');
  }
}
