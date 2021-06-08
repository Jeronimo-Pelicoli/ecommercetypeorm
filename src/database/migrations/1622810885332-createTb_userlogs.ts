import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTbUserlogs1622810885332 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_userlogs',
                columns: [
                    {
                        name: 'idlog',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'iduser',
                        type:'uuid'
                    },
                    {
                        name: 'deslog',
                        type: 'varchar'
                    },
                    {
                        name: 'desip',
                        type: 'varchar'
                    },
                    {
                        name: 'desuseragent',
                        type: 'varchar'
                    },
                    {
                        name: 'dessessionid',
                        type: 'varchar'
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
        await queryRunner.dropTable('tb_userlogs')
    }

}
