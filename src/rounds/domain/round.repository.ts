import { RoundEntity } from './round.entity';

export abstract class RoundRepository {
  abstract create(data: RoundEntity): Promise<RoundEntity>;
  abstract findAll(): Promise<RoundEntity[] | []>;
  abstract findByUuid(uuid: string): Promise<RoundEntity | null>;
  abstract update(
    uuid: string,
    dataToUpdate: Partial<RoundEntity>,
  ): Promise<RoundEntity | null>;
  abstract remove(uuid: string): Promise<RoundEntity | null>;
}
