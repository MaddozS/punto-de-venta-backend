export class CreateClientDTO {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly boughtThisMonth: number;
    readonly purchases: string[];
}