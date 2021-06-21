import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSupplierDTO } from './dto/supplier.dto';
import { Supplier } from './schemas/supplier.schema';
import { SupplierService } from './supplier.service';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getSuppliers(): Promise<Supplier[]> {
    const suppliers = await this.supplierService.getAll();

    return suppliers;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getSupplier(@Param() params): Promise<Supplier> {
    const suppliers = await this.supplierService.getOne(params.id);

    return suppliers;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createSupplier(@Body() createSupplierDTO: CreateSupplierDTO): Promise<Supplier> {
    let supplier = await this.supplierService.createOne(createSupplierDTO).catch((error) => {
      throw new BadRequestException(error, 'No se ha podido crear el proveedor');
    });

    return supplier;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateSupplier(@Param() params, @Body() createSupplierDTO: CreateSupplierDTO): Promise<Supplier> {
    const updatedSupplier = await this.supplierService.updateOne(params.id, createSupplierDTO);

    return updatedSupplier;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteSupplier(@Param() params): Promise<void> {
    await this.supplierService.deleteOne(params.id);
  }
}
