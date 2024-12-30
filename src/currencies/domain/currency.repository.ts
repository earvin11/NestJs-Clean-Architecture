import { CurrencyEntity } from './currency.entity';

export abstract class CurrencyRepository {
  abstract create(data: CurrencyEntity): Promise<CurrencyEntity>;
  abstract findAll(): Promise<CurrencyEntity[] | []>;
  abstract findByUuid(uuid: string): Promise<CurrencyEntity | null>;
  abstract update(
    uuid: string,
    data: Partial<CurrencyEntity>,
  ): Promise<CurrencyEntity | null>;
  abstract remove(uuid: string): Promise<CurrencyEntity | null>;
}
