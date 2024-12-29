import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PlayerEntity } from 'src/players/domain/player.entity';

@Schema()
export class Player extends Document implements PlayerEntity {
  @Prop({ required: true })
  username: string;
  @Prop()
  balance: number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
