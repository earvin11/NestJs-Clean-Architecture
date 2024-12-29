import { PlayerEntity } from './player.entity';

export abstract class PlayerRepository {
  abstract create(data: PlayerEntity): Promise<PlayerEntity>;
  abstract findAll(): Promise<PlayerEntity[] | []>;
  abstract findByUuid(uuid: string): Promise<PlayerEntity | null>;
  abstract update(
    uuid: string,
    data: Partial<PlayerEntity>,
  ): Promise<PlayerEntity | null>;
  abstract delete(uuid: string): Promise<PlayerEntity | null>;
}
