import { BetEntity } from './bet.entity';

export abstract class BetRepository {
  abstract create(data: BetEntity): Promise<BetEntity>;
  abstract findAll(): Promise<BetEntity[] | []>;
}
