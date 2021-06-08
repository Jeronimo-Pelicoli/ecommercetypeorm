import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Cart from './Cart';
import Product from './Product';

@Entity('tb_cartsproducts')
export default class Cartproduct {

    @PrimaryColumn()
    idcartproduct: string;

    @ManyToOne(() => Cart, cart => cart.cartproduct)
    @JoinColumn({ name: 'idcart'})
    cart: Cart;

    @Column()
    idcart: string;

    @ManyToOne(() => Product, product => product.cartproduct)
    @JoinColumn({ name: 'idproduct'})
    product: Product;

    @Column()
    idproduct: string;

    @DeleteDateColumn()
    dtremoved: Date;

    @CreateDateColumn()
    dtregister: Date;

    constructor() {
        if(!this.idcartproduct) {
            this.idcartproduct = uuid();
        }
    }
}