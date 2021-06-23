import { PartialType } from '@nestjs/mapped-types';
import { CreatePromotionDTO } from './create-promotion.dto';

export class UpdatePromotionDTO extends PartialType(CreatePromotionDTO) {}
