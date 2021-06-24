import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sale, SaleDocument } from './schemas/sale.schemas';
import { CreateSaleDTO } from './dto/sale.dto';
import { Service } from 'src/types/Service';
import { SalesModule } from './sales.module';

@Injectable()
export class SalesService implements Service<Sale, CreateSaleDTO> {
    constructor(@InjectModel(Sale.name) private saleModel: Model<SaleDocument>) {}

    async getAll() {
        const sales = await this.saleModel.find();
    
        return sales;
      }
    
      async getOne(saleID: string) {
        const sale = await this.saleModel.findById(saleID);
    
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
      async getSoldToday(){
        const sales = await this.saleModel.find(Date.now);

        return sales;
      }

      async generateUtility(){

      }

      async generateVoucher(){
          
      }
}
