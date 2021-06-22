import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';

export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  product: Product | Types.ObjectId;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  minStockRecommended: number;

  @Prop({ default: Date.now() })
  createdAt: Date;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
