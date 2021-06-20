import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDTO } from './dto/product.dto';
import { Service } from 'src/types/Service';

@Injectable()
export class ProductService implements Service<Product, CreateProductDTO> {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async getAll() {
    const products = await this.productModel.find();

    return products;
  }

  async getOne(productID: string) {
    const product = await this.productModel.findById(productID);

    return product;
  }

  async createOne(createProductDTO: CreateProductDTO) {
    const createdProduct = new this.productModel(createProductDTO);

    return createdProduct.save();
  }

  async updateOne(productID: string, createProductDTO: CreateProductDTO) {
    const updatedProduct = await this.productModel.findByIdAndUpdate(productID, createProductDTO, {
      new: true,
    });

    return updatedProduct;
  }

  async deleteOne(productID: string) {
    const deletedProduct = await this.productModel.findByIdAndDelete(productID);

    return deletedProduct;
  }
}
