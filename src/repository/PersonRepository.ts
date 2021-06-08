import { EntityRepository, Repository } from 'typeorm';

import Person from '../entity/Person';

@EntityRepository(Person)
export default class PersonRepository extends Repository<Person> {
}