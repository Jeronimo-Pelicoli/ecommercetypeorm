import { EntityRepository, Repository } from 'typeorm';

import Category from '../entity/Category';

@EntityRepository(Category)
export default class CategoryRepository extends Repository<Category> {
}