import { EntityRepository, Repository } from 'typeorm';

import Userlog from '../entity/Userlog';

@EntityRepository(Userlog)
export default class UserlogRepository extends Repository<Userlog> {
}