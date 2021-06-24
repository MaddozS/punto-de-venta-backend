import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from '../../product/schemas/product.schema';

@Schema()
export class CartItem {
    @Prop({type: Types.ObjectId, ref: Product.name, required: true})
    product: Product | Types.ObjectId
    
    @Prop({type: Number, required: true})
    quantity: number
}
export const CartItemSchema = SchemaFactory.createForClass(CartItem );

