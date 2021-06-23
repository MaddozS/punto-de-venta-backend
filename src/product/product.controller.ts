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

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getProducts(): Promise<Product[]> {
    const products = await this.productService.getAll();

    return products;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getProduct(@Param() params): Promise<Product> {
    const products = await this.productService.getOne(params.id);

    return products;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProduct(@Body() createProductDTO: CreateProductDTO): Promise<Product> {
    let product = await this.productService.createOne(createProductDTO).catch((error) => {
      throw new BadRequestException(error, 'No se ha podido crear el producto');
    });

    return product;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateProduct(@Param() params, @Body() createProductDTO: CreateProductDTO): Promise<Product> {
    const updatedProduct = await this.productService.updateOne(params.id, createProductDTO);

    return updatedProduct;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProduct(@Param() params): Promise<void> {
    await this.productService.deleteOne(params.id);
  }
}
