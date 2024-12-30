import { IsNumber, IsString } from 'class-validator';

export class CreateCurrencyDto {
  @IsString()
  name: string;

  @IsString()
  isoCode: string;

  @IsNumber()
  usdRateChange: number;
}
