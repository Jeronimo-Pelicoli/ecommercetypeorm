import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Address from './Address';
import Cartproduct from './Cartproduct';
import Order from './Order';
import User from './User';

@Entity('tb_carts')
export default class Cart {

    @PrimaryColumn()
    idcart: string;

    @OneToOne(() => Order, order => order.cart)
    order: Order;

    @OneToMany(() => Cartproduct, cartproduct => cartproduct.cart)
    cartproduct: Cartproduct[];

    @ManyToOne(() => User, user => user.cart)
    @JoinColumn({ name: 'iduser'})
    user: User;
    
    @Column()
    iduser: string;

    @ManyToOne(() => Address, address => address.cart)
    @JoinColumn({ name: 'idaddress'})
    address: Address;
    
    @Column()
    idaddress: string;
    
    @Column()
    dessessionid: string;
    
    @Column()
    vlfreight: number;

    @CreateDateColumn()
    dtregister: Date;

    constructor() {
        if(!this.idaddress) {
            this.idaddress = uuid();
        }
    }
}