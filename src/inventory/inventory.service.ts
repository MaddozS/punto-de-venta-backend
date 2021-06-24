import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/types/Service';
import { CreateInventoryDTO } from './dto/create-inventory.dto';
import { UpdateInventoryDTO } from './dto/update-inventory.dto';
import { Inventory, InventoryDocument } from './schemas/inventory.schema';

@Injectable()
export class InventoryService implements Service<Inventory, CreateInventoryDTO> {
  constructor(@InjectModel(Inventory.name) private inventoryModel: Model<InventoryDocument>) {}

  async getAll(): Promise<Inventory[]> {
    const inventoryItems = await this.inventoryModel.find().populate('product').exec();

    return inventoryItems;
  }

  async getOne(inventoryID: string): Promise<Inventory> {
    const inventoryItem = await this.inventoryModel.findById(inventoryID).populate('product').exec();

    return inventoryItem;
  }

  async createOne(createInventoryDTO: CreateInventoryDTO): Promise<Inventory> {
    const createdInventory = await this.inventoryModel.create(createInventoryDTO);

    return createdInventory.save();
  }

  async updateOne<UpdateDTO = UpdateInventoryDTO>(id: string, dto: UpdateDTO): Promise<Inventory> {
    const updatedInventory = await this.inventoryModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    return updatedInventory.populate('product');
  }

  async deleteOne(inventoryID: string): Promise<Inventory> {
    const deletedInventory = await this.inventoryModel.findByIdAndDelete(inventoryID).exec();

    return deletedInventory;
  }
}
