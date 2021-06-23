import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ProductQty, ProductQtySchema } from './productQty.shema';

export type PromotionDocument = Promotion & Document;

@Schema()
export class Promotion {
  @Prop({ type: [ProductQtySchema], default: [] })
  products: Types.Array<ProductQty>;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  expiringDate: Date;

  @Prop({ default: new Date() })
  createdAt: Date;
}
