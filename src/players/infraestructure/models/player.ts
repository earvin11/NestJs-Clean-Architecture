import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { OperatorEntity } from 'src/operators/domain/operator.entity';
import { PlayerEntity } from 'src/players/domain/player.entity';

@Schema()
export class Player extends Document implements PlayerEntity {
  @Prop({ unique: true })
  uuid: string;

  @Prop()
  lastBalance: number;

  @Prop({ default: true })
  status: boolean;

  @Prop({ default: true })
  isAdmin: boolean;

  @Prop()
  tokenWallet: string;

  @Prop()
  WL?: string;

  @Prop({ type: Object })
  operator: OperatorEntity;

  @Prop()
  userId: string;

  @Prop({ required: true })
  username: string;

  @Prop()
  balance: number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
