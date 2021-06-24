import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { CreateProductQtyDTO } from './create-product-qty.dto';

export class CreatePromotionDTO {
  @IsArray()
  readonly products?: CreateProductQtyDTO[]; //vacio significa que no hay condicion de productos

  @IsNotEmpty()
  @IsString()
  readonly code: string;

  @IsNotEmpty()
  readonly amount: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsDate()
  readonly startDate: Date;

  @IsNotEmpty()
  @IsDate()
  readonly expiringDate: Date;

  @IsNotEmpty()
  @IsDate()
  readonly createdAd: Date;
}
