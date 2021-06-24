export class CreateSaleDTO {
    readonly subtotal: number;
    readonly total: number;
    readonly cartItem:[{
        productId:string;
        quantity:number;
    }];
    readonly createdAt: Date;
}