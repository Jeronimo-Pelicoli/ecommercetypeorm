import { EntityRepository, Repository } from 'typeorm';

import Product from '../entity/Product';

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product> {
}