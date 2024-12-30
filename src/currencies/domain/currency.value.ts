import { generateUuid } from 'src/shared/helpers/generate-uuid.helper';
import { CurrencyEntity } from './currency.entity';

export class Currency implements CurrencyEntity {
  public name: string;
  public isoCode: string;
  public status: boolean;
  public uuid?: string;
  public usdRateChange: number;

  constructor(data: CurrencyEntity) {
    this.name = data.name;
    this.isoCode = data.isoCode;
    this.status = true;
    this.uuid = generateUuid();
    this.usdRateChange = data.usdRateChange;
  }
}
