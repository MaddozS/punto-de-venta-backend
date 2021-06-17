import { Controller, Post, Get, Res, HttpStatus, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateProductDTO } from './dto/product.dto';
import { Product } from './schemas/product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProduct(): Promise<Product[]> {
    const products = await this.productService.findAll();

    return products;
  }

  @Post()
  async create(@Res() res: Response, @Body() createProductDTO: CreateProductDTO) {
    let product: Product;
    try {
      product = await this.productService.create(createProductDTO);
      res.status(HttpStatus.CREATED).json(product);
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).json(err);
    }
  }
}
