import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { InventoryModule } from './inventory/inventory.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { SalesModule } from './sales/sales.module';
import { PromotionModule } from './promotion/promotion.module';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: process.env.NODE_ENV !== 'production' && `.env.${process.env.NODE_ENV}` }),
    MongooseModule.forRoot(`${process.env.MONGO_URI}`),
    ProductModule,
    InventoryModule,
    SuppliersModule,
    SalesModule,
    PromotionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
