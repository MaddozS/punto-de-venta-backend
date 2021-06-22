import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ProductOfferSchema, ProductOffer } from './product-offer.entity';

@Schema()
export class Supplier extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [ProductOfferSchema], required: true })
  productsOffer: Types.Array<ProductOffer>;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
