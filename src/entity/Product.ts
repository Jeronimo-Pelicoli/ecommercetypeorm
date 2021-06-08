import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateQueryBuilder } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Cartproduct from './Cartproduct';
import Productcategory from './Productcategory';

@Entity('tb_products')
export default class Product {

    @PrimaryColumn()
    idproduct: string;

    @OneToMany(() => Cartproduct, cartproduct => cartproduct.product)
    cartproduct: Cartproduct[];

    @OneToMany(() => Productcategory, productcategory => productcategory.product)
    productcategory: Productcategory[];

    @Column()
    desproduct: string;

    @Column()
    vlprice: number;

    @Column()
    vlwidth: number;

    @Column()
    vlheight: number;

    @Column()
    vllength: number;

    @Column()
    vlweight: number;

    @Column()
    desurl: string;

    @CreateDateColumn()
    dtregister: Date;

    constructor() {
        if(!this.idproduct) {
            this.idproduct = uuid();
        }
    }
}