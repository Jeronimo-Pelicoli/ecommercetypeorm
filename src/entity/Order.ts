import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Cart from './Cart';
import Orderstatus from './Orderstatus';
import User from './User';

@Entity('tb_orders')
export default class Order {

    @PrimaryColumn()
    idorder: string;

    @OneToOne(() => Cart, cart => cart.order)
    @JoinColumn({ name: 'idcart'})
    cart: Cart;

    @Column()
    idcart: string;

    @OneToOne(() => User, user => user.order)
    @JoinColumn({ name: 'iduser'})
    user: User;

    @Column()
    iduser: string;

    @OneToOne(() => Orderstatus, orderstatus => orderstatus.order)
    @JoinColumn({ name: 'idstatus'})
    orderstatus: Orderstatus;

    @Column()
    idstatus: string;

    @Column()
    vltotal: number;

    @CreateDateColumn()
    dtregister: Date;

    constructor() {
        if(!this.idorder) {
            this.idorder = uuid();
        }
    }
}