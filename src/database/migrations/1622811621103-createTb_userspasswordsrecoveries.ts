import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTbUserspasswordsrecoveries1622811621103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_userspasswordsrecoveries',
                columns: [
                    {
                        name: 'idrecovery',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'iduser',
                        type: 'uuid'
                    },
                    {
                        name: 'desip',
                        type: 'varchar'
                    },
                    {
                        name: 'dtrecovery',
                        type: 'timestamp',
                        default: 'now()'
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
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_userspasswordsrecoveries')
    }

}
