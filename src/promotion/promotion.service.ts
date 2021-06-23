import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/types/Service';
import { CreatePromotionDTO } from './dto/create-promotion.dto';
import { UpdatePromotionDTO } from './dto/update-promotion.dto';
import { Promotion } from './schemas/promotion.schema';

@Injectable()
export class PromotionService implements Service<Promotion, CreatePromotionDTO> {
  constructor(@InjectModel(Promotion.name) private promotionModel: Model<Promotion>) {}

  async getAll(): Promise<Promotion[]> {
    return await this.promotionModel.find().populate('products.product').exec();
  }

  async getOne(id: string): Promise<Promotion> {
    const promotion = await this.promotionModel.findById(id).populate('products.product').exec();
    if (!promotion) {
      throw new NotFoundException(`Promotion with id ${id} not found`);
    }
    return promotion;
  }

  async findByCode(code: string): Promise<Promotion> {
    const promotion = await this.promotionModel.findOne({ code }).populate('products.product').exec();
    if (!promotion) {
      throw new NotFoundException(`Promotion with code ${code} not found`);
    }
    return promotion;
  }

  createOne(dto: CreatePromotionDTO): Promise<Promotion> {
    return new this.promotionModel(dto).save();
  }

  async updateOne<UpdateDTO = UpdatePromotionDTO>(id: string, dto: UpdateDTO): Promise<Promotion> {
    const promotion = await this.promotionModel
      .findByIdAndUpdate(id, { $set: dto }, { new: true })
      .populate('products.product')
      .exec();
    if (!promotion) {
      throw new NotFoundException(`Promotion with id ${id} not found`);
    }
    return promotion;
  }

  async deleteOne(id: string): Promise<Promotion> {
    return await this.promotionModel.findByIdAndDelete(id);
  }
}
