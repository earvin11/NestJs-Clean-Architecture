import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCurrencyDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  isoCode: string;

  @ApiProperty()
  @IsNumber()
  usdRateChange: number;
}
