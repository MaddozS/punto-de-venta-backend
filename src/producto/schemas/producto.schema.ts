import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  precio: number;

  @Prop({ required: true, isSafeInteger: true })
  cantidad: number;

  @Prop({ default: Date.now() })
  agregadoEl: Date;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
