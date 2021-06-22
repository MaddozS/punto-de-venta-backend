import { IsNotEmpty } from 'class-validator';

export class CreateSupplierDTO {
  @IsNotEmpty()
  readonly name: string;
}
