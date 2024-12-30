import { Injectable } from 'src/shared/dependency-injection/injectable';
import { CurrencyEntity } from '../domain/currency.entity';
import { CurrencyRepository } from '../domain/currency.repository';
import { Currency } from '../domain/currency.value';

@Injectable()
export class CurrencyUseCases {
  constructor(private readonly currencyRepository: CurrencyRepository) {}

  async create(data: CurrencyEntity) {
    const currency = new Currency(data);
    return await this.currencyRepository.create(currency);
  }
  async findAll() {
    return await this.currencyRepository.findAll();
  }
  async findByUuid(uuid: string) {
    return await this.currencyRepository.findByUuid(uuid);
  }
  async update(uuid: string, data: Partial<CurrencyEntity>) {
    return await this.currencyRepository.update(uuid, data);
  }
  async remove(uuid: string) {
    return await this.currencyRepository.remove(uuid);
  }
}
