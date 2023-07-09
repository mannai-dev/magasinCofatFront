export class Movement { 
    id!: number;
    palletBarcode!: string;
    productId!: number;
    initialQuantity!: number;
    finalQuantity!: number;
    palletLot!: string;
    palletType!: string;
    movementType!: number;
    orderId!: string;
    source!: string;
    destination!: string;
    date!: Date;
    accountId!: number;
    createdOnUtc!: string;
    createdBy!: string;
    updatedOnUtc!: string;
    updatedBy!: string;
} 