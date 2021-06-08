import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Address from './Address';
import User from './User';

@Entity('tb_persons')
export default class Person {

    @PrimaryColumn()
    idperson: string;

    @OneToMany(() => Address, address => address.person)
    address: Address[];

    @OneToMany(() => User, user => user.person)
    user: User[];

    @Column()
    desperson: string;
    
    @Column()
    desemail: string;

    @Column()
    nrphonezip: number;

    @CreateDateColumn()
    dtregister: Date;

    constructor() {
        if(!this.idperson) {
            this.idperson =uuid();
        }
    }
}