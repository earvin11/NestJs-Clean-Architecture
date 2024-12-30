import { Injectable } from 'src/shared/dependency-injection/injectable';
import { RoundRepository } from '../domain/round.repository';
import { RoundEntity } from '../domain/round.entity';
import { Round } from '../domain/round.value';

@Injectable()
export class RoundUseCases {
  constructor(private readonly roundRepository: RoundRepository) {}

  async create(data: RoundEntity) {
    const round = new Round(data);
    return await this.roundRepository.create(round);
  }
  async findAll() {
    return await this.roundRepository.findAll();
  }
  async findByUuid(uuid: string) {
    return await this.roundRepository.findByUuid(uuid);
  }
  async update(uuid: string, data: Partial<RoundEntity>) {
    return await this.roundRepository.update(uuid, data);
  }
  async remove(uuid: string) {
    return await this.roundRepository.remove(uuid);
  }
}
