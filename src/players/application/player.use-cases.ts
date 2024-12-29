import { Injectable } from 'src/shared/dependency-injection/injectable';
import { PlayerEntity } from '../domain/player.entity';
import { PlayerRepository } from '../domain/player.repository';
import { Player } from '../domain/player.value';

@Injectable()
export class PlayerUseCases {
  constructor(private readonly playerRepository: PlayerRepository) {}

  async create(data: PlayerEntity) {
    const player = new Player(data);
    return await this.playerRepository.create(player);
  }
  async findAll() {
    return await this.playerRepository.findAll();
  }
  async findById(uuid: string) {
    return await this.playerRepository.findByUuid(uuid);
  }
  async update(uuid: string, data: Partial<PlayerEntity>) {
    return await this.playerRepository.update(uuid, data);
  }
  async delete(uuid: string) {
    return await this.playerRepository.delete(uuid);
  }
}
