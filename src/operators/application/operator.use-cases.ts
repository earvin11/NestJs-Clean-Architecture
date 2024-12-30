import { Injectable } from 'src/shared/dependency-injection/injectable';
import { OperatorRepository } from '../domain/operator.repository';
import { OperatorEntity } from '../domain/operator.entity';
import { Operator } from '../domain/operator.value';

@Injectable()
export class OperatorUseCases {
  constructor(private readonly operatorRepository: OperatorRepository) {}

  async create(data: OperatorEntity) {
    const operator = new Operator(data);
    return await this.operatorRepository.create(operator);
  }
  async findAll() {
    return await this.operatorRepository.findAll();
  }
  async findByUuid(uuid: string) {
    return await this.operatorRepository.findByUuid(uuid);
  }
  async update(uuid: string, data: Partial<OperatorEntity>) {
    return await this.operatorRepository.update(uuid, data);
  }
  async remove(uuid: string) {
    return await this.operatorRepository.remove(uuid);
  }
}
