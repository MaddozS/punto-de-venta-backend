import { ProductOffer } from './ProductOffer';
export class CreateSupplierDTO {
  readonly name: string;
  readonly info?: string;
  readonly products: ProductOffer[]; // IDs of products
  readonly createdAt: Date;
}
