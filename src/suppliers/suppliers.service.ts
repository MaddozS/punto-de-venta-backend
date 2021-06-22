import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Supplier } from './schemas/supplier.schema';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(@InjectModel(Supplier.name) private supplierModel: Model<Supplier>) {}

  async create(data: CreateSupplierDto) {
    return new this.supplierModel(data).save();
  }

  async findAll() {
    return await this.supplierModel.find().exec();
  }

  async findOne(id: string) {
    const supplier = await this.supplierModel.findById(id).exec();
    if (!supplier) {
      throw new NotFoundException(`Supplier with id ${id} not found`);
    }
    return supplier;
  }

  async update(id: string, data: UpdateSupplierDto) {
    const supplier = await this.supplierModel.findByIdAndUpdate(id, { $set: data }, { new: true }).exec();
    if (!supplier) {
      throw new NotFoundException(`Supplier with id ${id} not found`);
    }
    return supplier;
  }

  async remove(id: string) {
    return await this.supplierModel.findByIdAndDelete(id);
  }
}
