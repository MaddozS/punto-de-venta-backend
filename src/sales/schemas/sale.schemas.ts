import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SaleDocument = Sale & Document;

@Schema()
export class Sale {
    @Prop({ required: true })
    subtotal: number;

    @Prop({ required: true })
    total: number;

    @Prop({ required: true })
    cartItem: [{
        productId:string;
        quantity:number;
    }];

    @Prop({ default: new Date() })
    createdAt: Date;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);