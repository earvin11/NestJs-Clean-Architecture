import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CurrencyEntity } from 'src/currencies/domain/currency.entity';

@Schema()
export class CurrencyModel extends Document implements CurrencyEntity {
  @Prop()
  name: string;
  @Prop({ unique: true })
  isoCode: string;
  @Prop({ default: true })
  status: boolean;
  @Prop({ unique: true })
  uuid?: string;
  @Prop()
  usdRateChange: number;
}

export const CurrencySchema = SchemaFactory.createForClass(CurrencyModel);
