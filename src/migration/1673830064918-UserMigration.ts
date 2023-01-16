import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UserMigration1673830064918 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ''
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
