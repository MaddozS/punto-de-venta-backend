import { IsNotEmpty } from 'class-validator';
import { CreateProductOfferDTO } from './create-product-offer.dto';

export class CreateSupplierDTO {
  @IsNotEmpty()
  readonly name: string;

  readonly productsOffer: CreateProductOfferDTO[];
}
