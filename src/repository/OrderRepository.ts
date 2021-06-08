import { EntityRepository, Repository } from 'typeorm';

import Order from '../entity/Order';

@EntityRepository(Order)
export default class OrderRepository extends Repository<Order> {
}