import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDTO } from './dto/create-supplier.dto';
import { UpdateSupplierDTO } from './dto/update-supplier.dto';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  create(@Body() createSupplierDto: CreateSupplierDTO) {
    return this.suppliersService.createOne(createSupplierDto);
  }

  @Get()
  async findAll() {
    const suppliers = await this.suppliersService.getAll();
    return suppliers;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suppliersService.getOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDTO) {
    return this.suppliersService.updateOne(id, updateSupplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suppliersService.deleteOne(id);
  }
}
