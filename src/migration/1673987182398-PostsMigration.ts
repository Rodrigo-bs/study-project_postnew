import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm"

export class PostsMigration1673987182398 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'posts',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'content',
                        type: 'text',
                    },
                    {
                        name: 'config',
                        type: 'text',
                    },
                    {
                        name: 'createdAt',
                        type: 'datetime',
                        default: 'now()'
                    },
                    {
                        name: 'updatedAt',
                        type: 'datetime',
                        default: 'now()'
                    }
                ]
            })
        );

        await queryRunner.addColumn(
            'posts',
            new TableColumn({
                name: 'user_id',
                type: 'int'
            })
        );

        await queryRunner.createForeignKey(
            'posts',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('posts');
    }

}
