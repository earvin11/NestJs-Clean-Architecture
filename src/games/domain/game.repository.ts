import { GameEntity } from './game.entity';

export abstract class GameRepository {
  abstract create(data: GameEntity): Promise<GameEntity>;
  abstract findAll(): Promise<GameEntity[] | []>;
  abstract findByUuid(uuid: string): Promise<GameEntity | null>;
  abstract update(
    uuid: string,
    dataToUpdate: Partial<GameEntity>,
  ): Promise<GameEntity | null>;
  abstract remove(uuid: string): Promise<GameEntity | null>;
}
