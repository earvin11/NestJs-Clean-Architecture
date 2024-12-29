import { PlayerEntity } from 'src/players/domain/player.entity';
import { PlayerRepository } from 'src/players/domain/player.repository';

export class PlayerMemoryRepository extends PlayerRepository {
  private players: PlayerEntity[] = [];

  async create(data: PlayerEntity): Promise<PlayerEntity> {
    this.players.push(data);
    return data;
  }
  async findAll(): Promise<PlayerEntity[] | []> {
    return this.players;
  }
  async findById(id: string): Promise<PlayerEntity | null> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<PlayerEntity | null> {
    throw new Error('Method not implemented.');
  }
}
