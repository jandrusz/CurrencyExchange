export class RateDTO {
    no: string;
    effectiveDate: string;
    bid: number;
    ask: number;

    constructor(no: string, effectiveDate: string, bid: number, ask: number) {
        this.no = no;
        this.effectiveDate = effectiveDate;
        this.bid = bid;
        this.ask = ask;
    }
}
