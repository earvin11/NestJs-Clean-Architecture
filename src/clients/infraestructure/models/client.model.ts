import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ClientEntity } from 'src/clients/domain/client.entity';

@Schema()
export class ClientModel extends Document implements ClientEntity {
  @Prop({ require: true })
  uuid?: string;

  @Prop({ unique: true })
  name: string;

  @Prop()
  endpointAuth: string;

  @Prop()
  endpointRollback: string;

  @Prop()
  endpointBet: string;

  @Prop()
  endpointWin: string;

  @Prop()
  logo?: string;

  @Prop()
  loaderLogo?: string;

  @Prop()
  status?: boolean;

  @Prop()
  available?: boolean;

  @Prop()
  useLogo?: boolean;
}

export const ClientSchema = SchemaFactory.createForClass(ClientModel);
