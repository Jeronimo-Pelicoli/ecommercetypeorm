import { EntityRepository, Repository } from 'typeorm';

import Cart from '../entity/Cart';

@EntityRepository(Cart)
export default class CartRepository extends Repository<Cart> {
}