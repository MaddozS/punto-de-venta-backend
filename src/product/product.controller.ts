import { Controller, Post, Get, HttpStatus, Body, BadRequestException, HttpCode } from '@nestjs/common';
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
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProductDTO: CreateProductDTO): Promise<Product> {
    let product: Product;

    product = await this.productService.create(createProductDTO).catch((error) => {
      throw new BadRequestException(error, 'No se ha podido crear el producto');
    });

    return product;
  }
}
