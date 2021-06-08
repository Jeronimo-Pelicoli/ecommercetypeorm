import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import User from './User';

@Entity('tb_userlogs')
export default class Userlog {

    @PrimaryColumn()
    idlog: string;

    @ManyToOne(() => User, user => user.userpasswordrecovery)
    @JoinColumn({ name: 'iduser'})
    user: User;

    @Column()
    iduser: string;

    @Column()
    deslog: string;

    @Column()
    desip: string;

    @Column()
    desuseragent: string;

    @Column()
    dessession: string;

    @Column()
    desurl: string;

    @CreateDateColumn()
    dtregister: Date;

    constructor() {
        if(!this.idlog) {
            this.idlog = uuid();
        }
    }
}