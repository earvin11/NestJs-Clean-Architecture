export interface CurrencyEntity {
  name: string;
  isoCode: string;
  status?: boolean;
  uuid?: string;
  usdRateChange: number;
}
