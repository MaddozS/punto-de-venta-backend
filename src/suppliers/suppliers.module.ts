import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { Supplier, SupplierSchema } from './schemas/supplier.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Supplier.name,
        schema: SupplierSchema,
      },
    ]),
  ],
  controllers: [SuppliersController],
  providers: [SuppliersService],
  exports: [SuppliersService],
})
export class SuppliersModule {}
