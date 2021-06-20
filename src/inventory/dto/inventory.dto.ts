export class CreateInventoryDTO {
  readonly product: string;
  readonly stock: number;
  readonly minStockRecommended: number;
  readonly createdAt: Date;
}
