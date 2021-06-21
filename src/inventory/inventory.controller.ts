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
import { CreateInventoryDTO } from './dto/inventory.dto';
import { InventoryService } from './inventory.service';
import { Inventory } from './schemas/inventory.schema';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getInventorys(): Promise<Inventory[]> {
    const inventories = await this.inventoryService.getAll();

    return inventories;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getInventory(@Param() params): Promise<Inventory> {
    const inventory = await this.inventoryService.getOne(params.id);

    return inventory;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createInventory(@Body() createInventoryDTO: CreateInventoryDTO): Promise<Inventory> {
    let inventory = await this.inventoryService.createOne(createInventoryDTO).catch((error) => {
      throw new BadRequestException(error, 'No se ha podido crear el objeto de inventario');
    });

    return inventory;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateInventory(@Param() params, @Body() createInventoryDTO: CreateInventoryDTO): Promise<Inventory> {
    const updatedInventory = await this.inventoryService.updateOne(params.id, createInventoryDTO);

    return updatedInventory;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteInventory(@Param() params): Promise<void> {
    await this.inventoryService.deleteOne(params.id);
  }
}
