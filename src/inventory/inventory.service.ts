import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/types/Service';
import { CreateInventoryDTO } from './dto/inventory.dto';
import { Inventory, InventoryDocument } from './schemas/inventory.schema';

@Injectable()
export class InventoryService implements Service<Inventory, CreateInventoryDTO> {
  constructor(@InjectModel(Inventory.name) private inventoryModel: Model<InventoryDocument>) {}

  async getAll(): Promise<Inventory[]> {
    const inventoryItems = await this.inventoryModel.find();

    return inventoryItems;
  }

  async getOne(inventoryID: string): Promise<Inventory> {
    const inventoryItem = await this.inventoryModel.findById(inventoryID);

    return inventoryItem;
  }

  createOne(createInventoryDTO: CreateInventoryDTO): Promise<Inventory> {
    const createdInventory = new this.inventoryModel(createInventoryDTO);

    return createdInventory.save();
  }

  async updateOne(inventoryID: string, createInventoryDTO: CreateInventoryDTO): Promise<Inventory> {
    const updatedInventory = await this.inventoryModel.findByIdAndUpdate(inventoryID, createInventoryDTO, {
      new: true,
    });

    return updatedInventory;
  }

  async deleteOne(inventoryID: string): Promise<Inventory> {
    const deletedInventory = await this.inventoryModel.findByIdAndDelete(inventoryID);

    return deletedInventory;
  }
}
