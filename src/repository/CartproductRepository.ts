import { EntityRepository, Repository } from 'typeorm';

import Cartproduct from '../entity/Cartproduct';

@EntityRepository(Cartproduct)
export default class CartproductRepository extends Repository<Cartproduct> {
}