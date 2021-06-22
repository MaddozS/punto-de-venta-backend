import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Supplier } from './entities/supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(@InjectModel(Supplier.name) private supplierModel: Model<Supplier>) {}

  async create(data: CreateSupplierDto) {
    return new this.supplierModel(data);
  }

  findAll() {
    return this.supplierModel.find().exec();
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

  remove(id: string) {
    return this.supplierModel.findByIdAndDelete(id);
  }
}
