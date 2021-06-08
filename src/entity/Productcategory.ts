import { Column, JoinColumn, ManyToOne } from 'typeorm';
import Category from './Category';
import Product from './Product';

export default class Productcategory {

    @ManyToOne(() => Category, cart => cart.productcategory)
    @JoinColumn({ name: 'idcategory'})
    category: Category;

    @Column()
    idcategory: Category;

    @ManyToOne(() => Product, product => product.productcategory)
    @JoinColumn({ name: 'idproduct'})
    product: Product;

    @Column()
    idproduct: Product;
}