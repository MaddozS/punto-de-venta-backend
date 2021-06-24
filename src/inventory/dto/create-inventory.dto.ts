import { IsNotEmpty, IsMongoId, IsNumber } from 'class-validator';
import { Types } from 'mongoose';
import { INVENTORY_STATUS } from 'src/types/InventoryStatus';
export class CreateInventoryDTO {
  @IsNotEmpty()
  @IsMongoId()
  readonly product: Types.ObjectId;

  @IsNotEmpty()
  @IsNumber()
  readonly stock: number;

  @IsNotEmpty()
  @IsNumber()
  readonly minStockRecommended: number;

  @IsNotEmpty()
  readonly createdAt: Date;
}
