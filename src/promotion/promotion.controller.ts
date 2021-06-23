import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePromotionDTO } from './dto/create-promotion.dto';
import { UpdatePromotionDTO } from './dto/update-promotion.dto';
import { PromotionService } from './promotion.service';

@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Post()
  create(@Body() createPromotionDTO: CreatePromotionDTO) {
    return this.promotionService.createOne(createPromotionDTO);
  }

  @Get()
  async findAll() {
    return await this.promotionService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotionService.getOne(id);
  }

  @Get('code/:code')
  findByCode(@Param('id') code: string) {
    return this.promotionService.findByCode(code);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePromotionDTO: UpdatePromotionDTO) {
    return this.promotionService.updateOne(id, updatePromotionDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promotionService.deleteOne(id);
  }
}
