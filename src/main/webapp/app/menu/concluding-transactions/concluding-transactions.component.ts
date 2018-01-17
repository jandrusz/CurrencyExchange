import {AfterViewInit, Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConcludingTransactionsApiService} from './concluding-transactions-api.service';
import {CurrencyDTO} from './currency-dto';

@Component({
    selector: 'jhi-concluding-transactions',
    templateUrl: './concluding-transactions.component.html',
    styleUrls: [
        'concludingTransactions.scss'
    ]
})
export class ConcludingTransactionsModalComponent implements AfterViewInit {

    value: string;
    fieldsAreCorrect: boolean = true;
    bankAccountK: string;
    bankAccountS: string;
    option: string;
    currency1: CurrencyDTO;
    currency2: CurrencyDTO;
    options: Array<Object> = [
        {name: 'Kupuję', value: 'BUY'},
        {name: 'Sprzedaję', value: 'SELL'}
    ];
    currencies1: Array<CurrencyDTO>;
    currencies2: Array<CurrencyDTO>;

    constructor(public activeModal: NgbActiveModal,
                private concludingTransactionsApiService: ConcludingTransactionsApiService) {
    }

    ngAfterViewInit(): void {
        this.getCurrencies();
    }

    getCurrencies() {
        return this.concludingTransactionsApiService.get().toPromise().then((currencies) => {
            if (currencies) {
                this.currencies1 = currencies.map((x) => Object.assign({}, x));
                this.currencies2 = currencies.map((x) => Object.assign({}, x));
            }
        }).catch((err) => {
            return null;
        });
    }

    check() {
        if (!this.option || !this.currency1 || !this.currency2 || !this.value || !this.bankAccountK ||
            !this.bankAccountS || this.bankAccountK.length < 26 || this.bankAccountS.length < 26 || this.value.substr(this.value.indexOf(',') + 1).length > 2) {
            this.fieldsAreCorrect = false;
        } else {
            this.fieldsAreCorrect = true;
        }
    }

    cancel() {
        this.activeModal.dismiss('cancel');
    }

    actionOption() {
        console.log(this.option);
    }

    actionCurrency1() {
        if (this.currency1.code === 'PLN') {
            this.currencies2 = this.currencies2.filter((item) => item.code !== this.currency1.code);
        } else if (this.currencies2.filter((item) => item.code === 'PLN').length === 0) {
            this.currencies2.unshift(new CurrencyDTO(1, 'PLN', 'złoty polski'))
        }
        if ((this.currency1.code !== 'PLN')) {
            this.currency2 = this.currencies2[0];
        }
    }

    actionCurrency2() {
        if (this.currency2.code === 'PLN') {
            this.currencies1 = this.currencies1.filter((item) => item.code !== this.currency2.code);
        } else if (this.currencies1.filter((item) => item.code === 'PLN').length === 0) {
            this.currencies1.unshift(new CurrencyDTO(1, 'PLN', 'złoty polski'))
        }
        if ((this.currency2.code !== 'PLN')) {
            this.currency1 = this.currencies1[0];
        }
    }
}
