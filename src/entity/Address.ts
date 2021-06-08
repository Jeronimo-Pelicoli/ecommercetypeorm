import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid} from 'uuid';
import Cart from './Cart';
import Person from './Person';

@Entity('tb_address')
export default class Address {

    @PrimaryColumn()
    idaddress: string;

    @ManyToOne(() => Person, person => person.address)
    @JoinColumn({ name: 'idperson'})
    person: Person;

    @OneToMany(() => Cart, cart => cart.address)
    cart: Cart[];

    @Column()
    idperson: string;

    @Column()
    desaddress: string;

    @Column()
    descomplement: string;

    @Column()
    descity: string;

    @Column()
    desstate: string;

    @Column()
    descountry: string;

    @Column()
    nrzipcode: number;

    @CreateDateColumn()
    dtregister: Date;

    constructor() {
        if(!this.idaddress) {
            this.idaddress = uuid();
        }
    }
}