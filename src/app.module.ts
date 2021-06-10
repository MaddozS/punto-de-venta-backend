import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductoModule } from '@producto/producto.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    process.env.NODE_ENV !== 'production'
      ? ConfigModule.forRoot({
          envFilePath: `.env.${process.env.NODE_ENV}`,
        })
      : null,
    ProductoModule,
    MongooseModule.forRoot(`mongodb://localhost/${process.env.blueyou}`, {
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
