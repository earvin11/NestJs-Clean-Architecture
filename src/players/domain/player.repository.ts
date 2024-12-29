import { PlayerEntity } from './player.entity';

export abstract class PlayerRepository {
  abstract create(data: PlayerEntity): Promise<PlayerEntity>;
  abstract findAll(): Promise<PlayerEntity[] | []>;
  abstract findById(id: string): Promise<PlayerEntity | null>;
  abstract delete(id: string): Promise<PlayerEntity | null>;
}
