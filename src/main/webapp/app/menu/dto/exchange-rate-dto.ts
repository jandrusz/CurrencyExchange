import {RateDTO} from "./rate-dto";
export class ExchangeRateDTO {

    table: string;
    currency: string;
    code:string;
    rates: Array<RateDTO>;

    constructor(table: string, currency: string, code: string) {
        this.table = table;
        this.currency = currency;
        this.code = code;
    }
}
