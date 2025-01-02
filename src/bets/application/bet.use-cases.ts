import { Injectable } from 'src/shared/dependency-injection/injectable';
import { BetEntity } from '../domain/bet.entity';
import { BetRepository } from '../domain/bet.repository';
import { Bet } from '../domain/bet.value';
import { GameUseCases } from 'src/games/application/game.use-cases';

@Injectable()
export class BetUseCases {
  constructor(
    private readonly betRepository: BetRepository,
    private readonly gameUseCases: GameUseCases,
  ) {}

  async create(data: BetEntity) {
    const { gameUuid } = data;
    const game = await this.gameUseCases.findByUuid(gameUuid);
    console.log({ game });
    const bet = new Bet(data);
    return await this.betRepository.create(bet);
  }
  async findAll() {
    return await this.betRepository.findAll();
  }
}
