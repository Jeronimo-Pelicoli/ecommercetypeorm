import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import User from './User';

export default class Userpasswordrecovery {

    @PrimaryColumn()
    idrecovery: string;

    @ManyToOne(() => User, user => user.userpasswordrecovery)
    @JoinColumn({ name: 'iduser'})
    user: User;

    @Column()
    iduser: string;

    @Column()
    desip: string;

    @UpdateDateColumn()
    dtrecovery: Date;

    @CreateDateColumn()
    dtregister: Date;

    constructor() {
        if(!this.idrecovery) {
            this.idrecovery = uuid();
        }
    }
}