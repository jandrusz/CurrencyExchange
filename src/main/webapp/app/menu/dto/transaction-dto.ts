export class TransactionDTO {

    id: number;
    side: string;
    insertedAmount: number;
    currency1: string;
    calculatedAmount: number;
    currency2: string;
    exchange: number;
    billAccountK: string;
    billAccountS: string;
    userId: number;
    inclusionDate: string;

    constructor(side: string, insertedAmount: number, currency1: string, calculatedAmount: number, currency2: string,
                exchange: number, billAccountK: string, billAccountS: string, userId: number) {
        this.side = side;
        this.insertedAmount = insertedAmount;
        this.currency1 = currency1;
        this.calculatedAmount = calculatedAmount;
        this.currency2 = currency2;
        this.exchange = exchange;
        this.billAccountK = billAccountK;
        this.billAccountS = billAccountS;
        this.userId = userId;
    }
}
