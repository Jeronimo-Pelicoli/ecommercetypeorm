import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTbCarts1622813370612 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_carts',
                columns: [
                    {
                        name: 'idcart',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'dessessionid',
                        type: 'varchar'
                    },
                    {
                        name: 'iduser',
                        type: 'uuid'
                    },
                    {
                        name: 'idaddress',
                        type: 'uuid'
                    },
                    {
                        name: 'vlfreight',
                        type: 'number'
                    },
                    {
                        name: 'dtregister',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKUser',
                        referencedTableName: 'tb_users',
                        referencedColumnNames: ['iduser'],
                        columnNames: ['iduser'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKAddress',
                        referencedTableName: 'tb_address',
                        referencedColumnNames: ['idaddress'],
                        columnNames: ['idaddress'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('tb_carts')
    }

}
