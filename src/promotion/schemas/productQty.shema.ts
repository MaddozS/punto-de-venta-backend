import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';

export type ProductQtyDocument = ProductQty & Document;

@Schema()
export class ProductQty {
  @Prop({ type: Types.ObjectId, ref: Product.name, required: true })
  product: Types.ObjectId | Product;

  @Prop({ required: true, min: 1 })
  quantity: number;
}

export const ProductQtySchema = SchemaFactory.createForClass(ProductQty);
