import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTbCartsproducts1622815066327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'tb_cartsproducts',
                columns: [
                    {
                        name: 'idcartproduct',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'idcart',
                        type: 'uuid'
                    },
                    {
                        name: 'idproduct',
                        type: 'uuid'
                    },
                    {
                        name: 'dtremoved',
                        type: 'datetime'
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
                        name: 'FKProduct',
                        referencedTableName: 'tb_products',
                        referencedColumnNames: ['idproduct'],
                        columnNames: ['idproduct'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_cartsproducts')
    }
}
