import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';

export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
  @Prop({ type: mongooseSchema.Types.ObjectId, ref: 'Product' })
  product: Product;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  minStockRecommended: number;

  @Prop({ default: Date.now() })
  createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Inventory);
