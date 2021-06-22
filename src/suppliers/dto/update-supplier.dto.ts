import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplierDTO } from './create-supplier.dto';
import { CreateProductOfferDto } from './create-product-offer.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateSupplierDto extends PartialType(CreateSupplierDTO) {
  @IsNotEmpty()
  readonly productsOffer: CreateProductOfferDto[];
}
