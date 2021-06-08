import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTbAddress1622554122544 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tb_address",
                columns: [
                    {
                        name: 'idaddress',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'idperson',
                        type: 'uuid',

                    },
                    {
                        name: 'desaddress',
                        type: 'varchar'
                    },

                    {
                        name: 'descomplement',
                        type: 'varchar'
                    },
                    {
                        name: 'descity',
                        type: 'varchar'
                    },
                    {
                        name: 'desstate',
                        type: 'varchar'
                    },
                    {
                        name: 'descountry',
                        type: 'varchar'
                    },
                    { 
                        name: 'nrzipcode',
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
                        name: 'FKPerson',
                        referencedTableName: 'tb_persons',
                        referencedColumnNames: ['id'],
                        columnNames: ['idperson'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('tb_address')
    }

}
