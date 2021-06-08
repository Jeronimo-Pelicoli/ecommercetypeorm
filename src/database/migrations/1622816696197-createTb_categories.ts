import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTbCategories1622816696197 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_categories',
                columns: [
                    {
                        name: 'idcategory',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'descategory',
                        type: 'varchar'
                    },
                    {
                        name: 'dtregister',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_categories')
    }

}
