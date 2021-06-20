import {
  Controller,
  Post,
  Get,
  HttpStatus,
  Body,
  BadRequestException,
  HttpCode,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { Product } from './schemas/product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    const products = await this.productService.getAll();

    return products;
  }

  @Get(':id')
  async getProduct(@Param() params): Promise<Product> {
    const products = await this.productService.getOne(params.id);

    return products;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProduct(@Body() createProductDTO: CreateProductDTO): Promise<Product> {
    let product: Product;

    product = await this.productService.createOne(createProductDTO).catch((error) => {
      throw new BadRequestException(error, 'No se ha podido crear el producto');
    });

    return product;
  }

  @Put(':id')
  async updateProduct(@Param() params, @Body() createProductDTO: CreateProductDTO): Promise<Product> {
    const products = await this.productService.updateOne(params.id, createProductDTO);

    return products;
  }

  @Delete(':id')
  async deleteProduct(@Param() params): Promise<Product> {
    const products = await this.productService.deleteOne(params.id);

    return products;
  }
}
