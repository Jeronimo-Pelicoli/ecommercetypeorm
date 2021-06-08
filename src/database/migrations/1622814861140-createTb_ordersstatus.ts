import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTbOrdersstatus1622814861140 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_ordersstatus',
                columns: [
                    {
                        name: 'idstatus',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'desstatus',
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
        await queryRunner.dropTable('tb_ordersstatus')
    }

}
