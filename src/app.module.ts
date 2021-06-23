import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { InventoryModule } from './inventory/inventory.module';
import { SuppliersModule } from './suppliers/suppliers.module';

@Module({
  imports: [
    process.env.NODE_ENV !== 'production'
      ? ConfigModule.forRoot({
          envFilePath: `.env.${process.env.NODE_ENV}`,
        })
      : null,
    MongooseModule.forRoot(`${process.env.MONGO_URI}`),
    ProductModule,
    InventoryModule,
    SuppliersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
