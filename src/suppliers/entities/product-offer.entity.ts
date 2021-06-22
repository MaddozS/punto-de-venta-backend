import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';

@Schema()
export class ProductOffer {
  @Prop({ type: Types.ObjectId, ref: Product.name, required: true })
  product: Product | Types.ObjectId;

  @Prop({ type: Number, required: true })
  price: number;
}

export const ProductOfferSchema = SchemaFactory.createForClass(ProductOffer);
