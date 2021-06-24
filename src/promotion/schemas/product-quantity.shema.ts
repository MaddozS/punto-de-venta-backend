import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from '../../product/schemas/product.schema';

export type ProductQuantityDocument = ProductQuantity & Document;

@Schema()
export class ProductQuantity {
  @Prop({ type: Types.ObjectId, ref: Product.name, required: true })
  product: Types.ObjectId | Product;

  @Prop({ required: true, min: 1 })
  quantity: number;
}

export const ProductQuantitySchema = SchemaFactory.createForClass(ProductQuantity);
