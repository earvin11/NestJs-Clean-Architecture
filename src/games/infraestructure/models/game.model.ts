import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GameEntity } from 'src/games/domain/game.entity';

@Schema()
export class GameModel extends Document implements GameEntity {
  @Prop({ unique: true })
  uuid: string;

  @Prop({ unique: true })
  name: string;

  @Prop()
  raceDuration: string;

  @Prop({ default: true })
  status: boolean;
}

export const GameSchema = SchemaFactory.createForClass(GameModel);
