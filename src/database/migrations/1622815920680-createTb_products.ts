import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTbProducts1622815920680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_products',
                columns: [
                    {
                        name: 'idproduct',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'desproduct',
                        type: 'varchar'
                    },
                    {
                        name: 'vlprice',
                        type: 'number'
                    },
                    {
                        name: 'vlwidth',
                        type: 'number'
                    },
                    {
                        name: 'vlheight',
                        type: 'number'
                    },
                    {
                        name: 'vllength',
                        type: 'number'
                    },
                    {
                        name: 'vlweight',
                        type: 'number'
                    },
                    {
                        name: 'desurl',
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
        await queryRunner.dropTable('tb_products')
    }
}
