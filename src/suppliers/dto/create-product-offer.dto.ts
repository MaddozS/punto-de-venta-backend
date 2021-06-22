import { IsNotEmpty, IsMongoId, IsNumber } from 'class-validator';
import { Types } from 'mongoose';

export class CreateProductOfferDTO {
  @IsNotEmpty()
  @IsMongoId()
  readonly product: Types.ObjectId;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}
