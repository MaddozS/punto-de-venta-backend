import { Controller, Post, Get, Res, HttpStatus, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateProductoDTO } from './dto/producto.dto';
import { Producto } from './schemas/producto.schema';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  async getProducto(): Promise<Producto[]> {
    const productos = await this.productoService.findAll();

    return productos;
  }

  @Post()
  async create(@Res() res: Response, @Body() createProductoDTO: CreateProductoDTO) {
    let producto: Producto;
    try {
      producto = await this.productoService.create(createProductoDTO);
      res.status(HttpStatus.CREATED).json(producto);
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).json(err);
    }
  }
}
