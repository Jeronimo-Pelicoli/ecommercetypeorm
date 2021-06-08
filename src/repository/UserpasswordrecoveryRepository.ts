import { EntityRepository, Repository } from 'typeorm';

import Userpasswordrecovery from '../entity/Userpasswordrecovery';

@EntityRepository(Userpasswordrecovery)
export default class UserpasswordrecoveryRepository extends Repository<Userpasswordrecovery> {
}