import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Order from './Order';

@Entity('tb_ordersstatus')
export default class Orderstatus {

    @PrimaryColumn()
    idstatus: string;

    @OneToOne(() => Order, order => order.orderstatus)
    order: Order;

    @Column()
    desstatus: string;

    @CreateDateColumn()
    dtregister: Date;

    constructor() {
        if(!this.idstatus) {
            this.idstatus = uuid();
        }
    }
}