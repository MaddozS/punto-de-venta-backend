import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/types/Service';
import { CreateSupplierDTO } from './dto/supplier.dto';
import { Supplier, SupplierDocument } from './schemas/supplier.schema';

@Injectable()
export class SupplierService implements Service<Supplier, CreateSupplierDTO> {
  constructor(@InjectModel(Supplier.name) private supplierModel: Model<SupplierDocument>) {}
  getAll(): Promise<Supplier[]> {
    throw new Error('Method not implemented.');
  }
  getOne(id: string): Promise<Supplier> {
    throw new Error('Method not implemented.');
  }
  createOne(dto: CreateSupplierDTO): Promise<Supplier> {
    throw new Error('Method not implemented.');
  }
  updateOne(id: string, dto: CreateSupplierDTO): Promise<Supplier> {
    throw new Error('Method not implemented.');
  }
  deleteOne(id: string): Promise<Supplier> {
    throw new Error('Method not implemented.');
  }
}
