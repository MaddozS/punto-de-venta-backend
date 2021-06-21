import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';
import { ProductOffer } from '../dto/ProductOffer';

export type SupplierDocument = Supplier & Document;

@Schema()
export class Supplier {
  @Prop({ type: Types.ObjectId, ref: 'Product' })
  product: Product | Types.ObjectId;

  @Prop()
  info: string;

  @Prop({ type: [{ product: Types.ObjectId, ref: 'Product', price: Number }] })
  products: ProductOffer[]; // IDs of products

  @Prop({ default: Date.now() })
  createdAt: Date;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
