import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTbOrders1622814229505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_orders',
                columns: [
                    {
                        name: 'idorder',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'idcart',
                        type: 'uuid'
                    },
                    {
                        name: 'iduser',
                        type: 'uuid'
                    },
                    {
                        name: 'idstatus',
                        type: 'uuid'
                    },
                    {
                        name: 'vltotal',
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
                        name: 'FKCart',
                        referencedTableName: 'tb_carts',
                        referencedColumnNames: ['idcart'],
                        columnNames: ['idcart'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKUser',
                        referencedTableName: 'tb_users',
                        referencedColumnNames: ['iduser'],
                        columnNames: ['iduser'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKStatus',
                        referencedTableName: 'tb_ordersstatus',
                        referencedColumnNames: ['idstatus'],
                        columnNames: ['idstatus'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_orders')
    }
}
