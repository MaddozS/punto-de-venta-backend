import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sale, SaleDocument } from './schemas/sale.schemas';
import { CreateSaleDTO } from './dto/sale.dto';
import { Service } from 'src/types/Service';
import { SalesModule } from './sales.module';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

@Injectable()
export class SalesService implements Service<Sale, CreateSaleDTO> {
    constructor(@InjectModel(Sale.name) private saleModel: Model<SaleDocument>) {}

    async getAll() {
      return await this.saleModel.find().populate('cart.product').exec();
    }
    
      async getOne(saleID: string) {
        const sale = await this.saleModel.findById(saleID).populate('cart.product').exec();
        if (!sale) {
            throw new NotFoundException(`Sale with id ${saleID} not found`);
        }
        return sale;
      }
    
      async createOne(createSaleDTO: CreateSaleDTO) {
        const createdSale = new this.saleModel(createSaleDTO);
    
        return createdSale.save();
      }
    
      async updateOne(saleID: string, createSaleDTO: CreateSaleDTO) {
        const updatedSale = await this.saleModel.findByIdAndUpdate(saleID, createSaleDTO, {
          new: true,
        });
    
        return updatedSale;
      }
    
      async deleteOne(productID: string) {
        const deletedSale = await this.saleModel.findByIdAndDelete(productID);
    
        return deletedSale;
      }

      //Needs to be finished
      async getSoldToday() {
        return await this.saleModel.find(Date.now).populate('cart.product').exec();
      }
}
