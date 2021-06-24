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
import { CreateSaleDTO } from './dto/sale.dto';
import { Sale } from './schemas/sale.schemas';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
    constructor(private readonly saleService: SalesService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async getSales(): Promise<Sale[]> {
      const sales = await this.saleService.getAll();
  
      return sales;
    }
  
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getSale(@Param() params): Promise<Sale> {
      const sale = await this.saleService.getOne(params.id);
  
      return sale;
    }
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createSale(@Body() createSaleDTO: CreateSaleDTO): Promise<Sale> {
      let sale = await this.saleService.createOne(createSaleDTO).catch((error) => {
        throw new BadRequestException(error, 'No se ha podido crear la venta');
      });
  
      return sale;
    }
  
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateSale(@Param() params, @Body() createSaleDTO: CreateSaleDTO): Promise<Sale> {
      const updatedSale = await this.saleService.updateOne(params.id, createSaleDTO);
  
      return updatedSale;
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteSale(@Param() params): Promise<void> {
      await this.saleService.deleteOne(params.id);
    }
}
