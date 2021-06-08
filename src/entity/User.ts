import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Cart from './Cart';
import Order from './Order';
import Person from './Person';
import Userlog from './Userlog';
import Userpasswordrecovery from './Userpasswordrecovery';

@Entity('tb_users')
export default class User {

    @PrimaryColumn()
    iduser: string;

    @OneToOne(() => Order, order => order.user)
    order: Order;
    
    @OneToMany(() => Cart, cart => cart.user)
    cart: Cart[];
    
    @OneToMany(() => Userpasswordrecovery, userpasswordrecovery => userpasswordrecovery.user)
    userpasswordrecovery: Userpasswordrecovery[];
    
    @OneToMany(() => Userlog, userlog => userlog.user)
    userlog: Userlog[];
    
    @ManyToOne(() => Person, person => person.user)
    @JoinColumn({ name: 'idperson'})
    person: Person;

    @Column()
    idperson: string;

    @Column()
    deslogin: string;

    @Column()
    despassword: string;

    @CreateDateColumn()
    dtregister: Date;

    constructor() {
        if(!this.iduser) {
            this.iduser = uuid();
        }
    }
}