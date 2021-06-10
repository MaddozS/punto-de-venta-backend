import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Producto, ProductoDocument } from './schemas/producto.schema';
import { CreateProductoDTO } from './dto/producto.dto';

@Injectable()
export class ProductoService {
  constructor(@InjectModel(Producto.name) private productoModel: Model<ProductoDocument>) {}

  async create(createProductoDTO: CreateProductoDTO): Promise<Producto> {
    const createdProducto = new this.productoModel(createProductoDTO);
    return createdProducto.save();
  }

  async findAll(): Promise<Producto[]> {
    return this.productoModel.find().exec();
  }
}
