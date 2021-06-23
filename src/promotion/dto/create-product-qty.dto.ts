import { IsNotEmpty, IsMongoId, IsNumber } from 'class-validator';
import { Types } from 'mongoose';

export class CreateProductQtyDTO {
  @IsNotEmpty()
  @IsMongoId()
  readonly product: Types.ObjectId;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
