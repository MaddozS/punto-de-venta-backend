import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { Sale, SaleSchema } from './schemas/sale.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Sale.name , schema: SaleSchema }])],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
