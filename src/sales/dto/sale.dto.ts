export class CreateSaleDTO {
    readonly id: number;
    readonly subtotal: number;
    readonly total: number;
    readonly discount: number;
    readonly promotionsIds: string[];
    readonly clientId: string;
    //missing cart item
    readonly createdAt: Date;
}