import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { SuppliersModule } from './suppliers/suppliers.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductModule, MongooseModule.forRoot(`${process.env.MONGO_URI}`), SuppliersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
