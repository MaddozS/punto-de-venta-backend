import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ProductQuantity, ProductQuantitySchema } from './product-quantity.shema';

export type PromotionDocument = Promotion & Document;

@Schema()
export class Promotion {
  @Prop({ type: [ProductQuantitySchema], default: [] })
  products: Types.Array<ProductQuantity>;

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

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
