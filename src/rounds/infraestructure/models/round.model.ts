import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RoundEntity } from 'src/rounds/domain/round.entity';

@Schema()
export class RoundModel extends Document implements RoundEntity {
  @Prop({ unique: true })
  uuid: string;
  @Prop()
  gameUuid: string;
  @Prop()
  roundNumber: number;
  @Prop()
  status: boolean;
  @Prop()
  open: boolean;
}

export const RoundSchema = SchemaFactory.createForClass(RoundModel);
