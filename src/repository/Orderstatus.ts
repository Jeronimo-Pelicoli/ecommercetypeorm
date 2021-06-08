import { EntityRepository, Repository } from 'typeorm';

import Orderstatus from '../entity/Orderstatus';

@EntityRepository(Orderstatus)
export default class OrderstatusRepository extends Repository<Orderstatus> {
}