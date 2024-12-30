import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { OperatorEntity } from 'src/operators/domain/operator.entity';

@Schema()
export class OperatorModel extends Document implements OperatorEntity {
  @Prop({ unique: true })
  uuid: string;

  @Prop()
  name: string;

  @Prop()
  clientUuid: string;

  @Prop()
  status: boolean;

  @Prop()
  minBet: number;

  @Prop()
  maxBet: number;

  @Prop()
  endpointAuth: string;

  @Prop()
  endpointBet: string;

  @Prop()
  endpointWin: string;

  @Prop()
  endpointRollback: string;

  @Prop()
  casinoToken: string;

  @Prop()
  available: boolean;
}

export const OperatorSchema = SchemaFactory.createForClass(OperatorModel);
