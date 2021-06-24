import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CartItem, CartItemSchema } from './cart-item.schema';

export type SaleDocument = Sale & Document;

@Schema()
export class Sale extends Document {
    @Prop({ type: Number, required: true })
    subtotal: number;

    @Prop({ type: Number, required: true })
    total: number;

    @Prop({ type: [CartItemSchema],  required: true })
    cart: Types.Array<CartItem> 
    
    @Prop({ default: new Date() })
    createdAt: Date;
}
export const SaleSchema = SchemaFactory.createForClass(Sale);