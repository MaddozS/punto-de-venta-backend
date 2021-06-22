import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    process.env.NODE_ENV !== 'production'
      ? ConfigModule.forRoot({
          envFilePath: `.env.${process.env.NODE_ENV}`,
        })
      : null,
    ProductModule,
    MongooseModule.forRoot(`mongodb://localhost/${process.env.DATABASE_NAME}`, {
      useNewUrlParser: true,
    }),
    InventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
