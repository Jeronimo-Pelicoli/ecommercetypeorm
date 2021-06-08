import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTbProductscategories1622816557014 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_productscategories',
                columns: [
                    {
                        name: 'idcategory',
                        type: 'uuid'
                    },
                    {
                        name: 'idproduct',
                        type: 'uuid'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKCategory',
                        referencedTableName: 'tb_categories',
                        referencedColumnNames: ['idcategory'],
                        columnNames: ['idcategory'],
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
        await queryRunner.dropTable('tb_productscategories')
    }

}
