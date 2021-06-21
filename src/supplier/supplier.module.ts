import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { Supplier, SupplierSchema } from './schemas/supplier.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Supplier.name, schema: SupplierSchema }])],
  providers: [SupplierService],
  controllers: [SupplierController],
})
export class SupplierModule {}
