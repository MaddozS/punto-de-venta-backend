import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Supplier } from './schemas/supplier.schema';
import { CreateSupplierDTO } from './dto/create-supplier.dto';
import { UpdateSupplierDTO } from './dto/update-supplier.dto';
import { Service } from 'src/types/Service';

@Injectable()
export class SuppliersService implements Service<Supplier, CreateSupplierDTO> {
  constructor(@InjectModel(Supplier.name) private supplierModel: Model<Supplier>) {}

  async getAll(): Promise<Supplier[]> {
    return await this.supplierModel.find().exec();
  }

  async getOne(id: string): Promise<Supplier> {
    const supplier = await this.supplierModel.findById(id).exec();
    if (!supplier) {
      throw new NotFoundException(`Supplier with id ${id} not found`);
    }
    return supplier;
  }

  createOne(dto: CreateSupplierDTO): Promise<Supplier> {
    return new this.supplierModel(dto).save();
  }

  async updateOne<UpdateDTO = UpdateSupplierDTO>(id: string, dto: UpdateDTO): Promise<Supplier> {
    const supplier = await this.supplierModel.findByIdAndUpdate(id, { $set: dto }, { new: true }).exec();
    if (!supplier) {
      throw new NotFoundException(`Supplier with id ${id} not found`);
    }
    return supplier;
  }

  async deleteOne(id: string): Promise<Supplier> {
    return await this.supplierModel.findByIdAndDelete(id);
  }
}
