import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Productcategory from './Productcategory';

@Entity('tb_categories')
export default class category {

    @PrimaryColumn()
    idcategory: string;

    @OneToMany(() => Productcategory, productcategory => productcategory.category)
    productcategory: Productcategory[];

    @Column()
    descategory: string;

    @CreateDateColumn()
    dtregister: Date;

    constructor() {
        if(!this.idcategory) {
            this.idcategory = uuid();
        }
    }
}