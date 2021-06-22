import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import config from 'src/shared/config';

@Module({
  imports: [
    process.env.NODE_ENV !== 'production'
      ? ConfigModule.forRoot({
          envFilePath: `.env.${process.env.NODE_ENV}`,
        })
      : null,
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:aB31ZXDu4gtqPkB6@cluster0.5rkcb.mongodb.net/tiendita?retryWrites=true&w=majority',
    ),
    SuppliersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
