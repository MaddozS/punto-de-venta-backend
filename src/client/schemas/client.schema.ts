import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client{
    @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ default: 0 })
  boughtThisMonth: number;

  @Prop({ default: [] })
  purchases: string[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);