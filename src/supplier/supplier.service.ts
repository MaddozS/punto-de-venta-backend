import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/types/Service';
import { CreateSupplierDTO } from './dto/supplier.dto';
import { Supplier, SupplierDocument } from './schemas/supplier.schema';

@Injectable()
export class SupplierService implements Service<Supplier, CreateSupplierDTO> {
  constructor(@InjectModel(Supplier.name) private supplierModel: Model<SupplierDocument>) {}
  async getAll(): Promise<Supplier[]> {
    const suppliers = await this.supplierModel.find();

    return suppliers;
  }
  async getOne(id: string): Promise<Supplier> {
    const supplier = await this.supplierModel.findById(id);

    return supplier;
  }
  createOne(dto: CreateSupplierDTO): Promise<Supplier> {
    const createdSupplier = new this.supplierModel(dto);

    return createdSupplier.save();
  }
  async updateOne(id: string, dto: CreateSupplierDTO): Promise<Supplier> {
    const updatedSupplier = await this.supplierModel.findByIdAndUpdate(id, dto, { new: true });

    return updatedSupplier;
  }
  async deleteOne(id: string): Promise<Supplier> {
    const deletedSupplier = await this.supplierModel.findByIdAndDelete(id);

    return deletedSupplier;
  }
}
