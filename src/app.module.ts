import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from './client/client.module';

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
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
