import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTbPersons1622487747335 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tb_persons",
                columns: [
                    {
                        name: 'idperson',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'desperson',
                        type: 'varchar'
                    },
                    {
                        name: 'desemail',
                        type: 'varchar'
                    },
                    {
                        name: 'nrphone',
                        type: 'number'
                    },
                    {
                        name: 'dtregister',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_persons')
    }

}
