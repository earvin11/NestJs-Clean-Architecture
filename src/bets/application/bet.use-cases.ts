import { Injectable } from 'src/shared/dependency-injection/injectable';
import { BetEntity } from '../domain/bet.entity';
import { BetRepository } from '../domain/bet.repository';
import { Bet } from '../domain/bet.value';

@Injectable()
export class BetUseCases {
  constructor(private readonly betRepository: BetRepository) {}

  async create(data: BetEntity) {
    const bet = new Bet(data);
    return await this.betRepository.create(bet);
  }
  async findAll() {
    return await this.betRepository.findAll();
  }
}
