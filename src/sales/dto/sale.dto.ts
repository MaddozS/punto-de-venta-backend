import { IsNotEmpty, IsMongoId, IsNumber, IsArray } from 'class-validator';
import { Types } from 'mongoose';
export class CreateCartItemDTO {
  @IsNotEmpty()
  @IsMongoId()
  readonly product: Types.ObjectId;
  
  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;
}
export class CreateSaleDTO {
    @IsNotEmpty()
    @IsNumber()
    readonly subtotal: number;
    
    @IsNotEmpty()
    @IsNumber()
    readonly total: number;
    
    @IsNotEmpty()
    @IsArray()
    readonly cart:  CreateCartItemDTO[]
}