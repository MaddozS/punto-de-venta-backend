import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';
import { INVENTORY_STATUS } from 'src/types/InventoryStatus';

export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  product: Product | Types.ObjectId;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true, min: [0, "You can't have negative items"] })
  minStockRecommended: number;

  @Prop({ type: String, enum: INVENTORY_STATUS, default: INVENTORY_STATUS.WITH_STOCK })
  status: number;

  @Prop({ default: new Date() })
  createdAt: Date;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
