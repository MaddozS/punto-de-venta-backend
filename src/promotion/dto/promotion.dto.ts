export class CreatePromotionDTO {
    readonly type: string;
    readonly products: string[]
    readonly includeGift: boolean;
    readonly giftHasDiscount: boolean;
    readonly gift: string;
    readonly giftDiscount: string;
    readonly discount: number;
    readonly createdAt: Date;
    readonly expirationDate: Date;
}