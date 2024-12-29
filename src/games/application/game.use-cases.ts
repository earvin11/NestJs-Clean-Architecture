import { Injectable } from '@nestjs/common';
import { GameEntity } from '../domain/game.entity';
import { GameRepository } from '../domain/game.repository';
import { Game } from '../domain/game.value';

@Injectable()
export class GameUseCases {
  constructor(private readonly gameRepository: GameRepository) {}

  public async create(data: GameEntity) {
    const game = new Game(data);
    return await this.gameRepository.create(game);
  }
  public async findAll() {
    return await this.gameRepository.findAll();
  }
  public async findByUuid(uuid: string) {
    return await this.gameRepository.findByUuid(uuid);
  }
  public async update(uuid: string, data: Partial<GameEntity>) {
    return await this.gameRepository.update(uuid, data);
  }
  public async remove(uuid: string) {
    return await this.gameRepository.remove(uuid);
  }
}
