import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDTO } from './dto/product.dto';
import { Service } from 'src/types/Service';

@Injectable()
export class ProductService implements Service<Product, CreateProductDTO> {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async getAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async getOne(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Supplier with id ${id} not found`);
    }
    return product;
  }

  createOne(dto: CreateProductDTO): Promise<Product> {
    return new this.productModel(dto).save();
  }

  async updateOne<UpdateDTO = CreateProductDTO>(id: string, dto: UpdateDTO): Promise<Product> {
    const product = await this.productModel.findByIdAndUpdate(id, { $set: dto }, { new: true }).exec();
    if (!product) {
      throw new NotFoundException(`Supplier with id ${id} not found`);
    }
    return product;
  }

  async deleteOne(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
