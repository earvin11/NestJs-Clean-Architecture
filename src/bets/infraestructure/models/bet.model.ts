import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BetEntity } from 'src/bets/domain/bet.entity';

@Schema({ versionKey: false })
export class BetModel extends Document implements BetEntity {
  @Prop({ required: true })
  uuid: string;

  @Prop({ type: Object })
  bet: Record<string, any>;

  @Prop()
  playerUuid: string;

  @Prop()
  totalAmount: number;

  @Prop()
  currencyUuid: string;

  @Prop()
  gameUuid: string;

  @Prop({ default: false })
  isPaid: boolean;
}

export const BetSchema = SchemaFactory.createForClass(BetModel);
