export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly qty: number;
  readonly createdAt: Date;
}
