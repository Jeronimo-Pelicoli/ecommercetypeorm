import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTbUsers1622809808129 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_users',
                columns: [
                    {
                        name: 'iduser',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'idperson',
                        type: 'uuid'
                    },
                    {
                        name: 'deslogin',
                        type: 'varchar'
                    },
                    {
                        name: 'despassword',
                        type: 'varchar'
                    },
                    {
                        name: 'dtregister',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FkPerson',
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
        await queryRunner.dropTable('tb_users')
    }

}
