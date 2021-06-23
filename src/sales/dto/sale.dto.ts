export class CreateSaleDTO {
    readonly subtotal: number;
    readonly total: number;
    readonly discount: number;
    readonly promotionsIds: string[];
    readonly clientId: string;
    readonly cartItem:[{
        productId:string;
        quantity:number;
    }];
    readonly createdAt: Date;
}