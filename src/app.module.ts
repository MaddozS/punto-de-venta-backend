import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryController } from './inventory/inventory.controller';
import { InventoryService } from './inventory/inventory.service';
import { InventoryModule } from './inventory/inventory.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [
    process.env.NODE_ENV !== 'production'
      ? ConfigModule.forRoot({
          envFilePath: `.env.${process.env.NODE_ENV}`,
        })
      : null,
    ProductModule,
    MongooseModule.forRoot(`mongodb://localhost/${process.env.blueyou}`, {
      useNewUrlParser: true,
    }),
    InventoryModule,
    SupplierModule,
  ],
  controllers: [AppController, InventoryController],
  providers: [AppService, InventoryService],
})
export class AppModule {}
