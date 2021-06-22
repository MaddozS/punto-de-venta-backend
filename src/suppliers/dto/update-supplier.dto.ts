import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplierDto } from './create-supplier.dto';
import { CreateProductOfferDto } from './create-product-offer.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {
  @IsNotEmpty()
  readonly productsOffer: CreateProductOfferDto[];
}
