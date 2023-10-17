import { Injectable } from '@nestjs/common';

@Injectable()
export class CompaniesService {
  create() {
    return 'This action adds a new company';
  }

  async findAll() {
    return `This action returns all companies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
