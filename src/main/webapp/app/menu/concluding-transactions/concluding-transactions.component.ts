import {AfterViewInit, Component, EventEmitter} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConcludingTransactionsApiService} from './concluding-transactions-api.service';
import {CurrencyDTO} from '../dto/currency-dto';
import {ExchangeRatesApiService} from '../exchange-rates/exchange-rates-api.service';
import {ExchangeRateDTO} from '../dto/exchange-rate-dto';
import {TransactionDTO} from '../dto/transaction-dto';
import {Broadcaster} from '../../shared/broadcaster/broadcaster';

@Component({
    selector: 'jhi-concluding-transactions',
    templateUrl: './concluding-transactions.component.html',
    styleUrls: [
        'concludingTransactions.scss'
    ]
})
export class ConcludingTransactionsModalComponent implements AfterViewInit {

    value: any;
    fieldsAreCorrect: boolean;
    showAcceptOrCancelTransaction: boolean;
    showTransactionSum: boolean;
    fieldsDisabled: boolean;
    transactionFinished: boolean;
    transactionSum: any;
    bankAccountK: any;
    bankAccountS: any;
    transactionId: string;
    exchangeRateForCurrencies: number;
    option: string;
    exchangeRate: ExchangeRateDTO;
    currency1: CurrencyDTO;
    currency2: CurrencyDTO;
    options: Array<Object> = [
        {name: 'Kupuję', value: 'BUY'},
        {name: 'Sprzedaję', value: 'SELL'}
    ];
    currencies1: Array<CurrencyDTO>;
    currencies2: Array<CurrencyDTO>;
    error: string;

    constructor(public activeModal: NgbActiveModal,
                private concludingTransactionsApiService: ConcludingTransactionsApiService,
                private exchangeRatesApiService: ExchangeRatesApiService,
                private broadcaster: Broadcaster) {
        this.fieldsAreCorrect = true;
        this.showAcceptOrCancelTransaction = false;
        this.showTransactionSum = false;
        this.fieldsDisabled = false;
        this.transactionFinished = false;
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

    disabled() {
        return this.fieldsDisabled;
    }

    check() {
        if (!this.allFieldsAreCorrect()) {
            this.fieldsAreCorrect = false;
        } else {
            this.fieldsAreCorrect = true;
            this.showTransactionSum = true;
            this.exchangeRateForCurrencies = this.getExchangeRateForUser();
            this.transactionSum = this.isFirstCurrencyPLN() ? this.value / this.exchangeRateForCurrencies : this.value * this.exchangeRateForCurrencies;
            this.transactionSum = this.transactionSum.toFixed(2);
            this.fieldsDisabled = true;
            this.showAcceptOrCancelTransaction = true;
        }
    }

    getExchangeRateForUser() {
        if (this.exchangeRate && this.option === 'SELL') {
            return this.exchangeRate.rates[0].ask;
        }
        return this.exchangeRate.rates[0].bid;
    }

    allFieldsAreCorrect() {
        let regEx = new RegExp('^[1-9]*[.]?[0-9]?[0-9]$');
        const amountRegEx = regEx.test(this.value);

        regEx = new RegExp('^[0-9]*$');
        const bankAccountRegEx = regEx.test(this.bankAccountK) && regEx.test(this.bankAccountS);

        if (!this.option) {
            this.error = 'Nie wybrałeś strony transakcji';
            return false;
        } else if (!this.currency1 || !this.currency2) {
            this.error = 'Nie wybrałeś walut';
            return false;
        } else if (!this.value) {
            this.error = 'Nie wpisałeś kwoty';
            return false;
        } else if (!amountRegEx) {
            this.error = 'Niedozwolony format kwoty';
            return false;
        } else if (!this.bankAccountK) {
            this.error = 'Niepoprawny numer konta "Kupuję na"';
            return false;
        } else if (!this.bankAccountS) {
            this.error = 'Niepoprawny numer konta "Sprzedaję z"';
            return false;
        } else if (this.bankAccountK.length !== 26) {
            this.error = 'Numer konta "Kupuję na" ma za mało cyfr';
            return false;
        } else if (this.bankAccountS.length !== 26) {
            this.error = 'Numer konta "Sprzedaję z" ma za mało cyfr';
            return false;
        } else if (!bankAccountRegEx) {
            this.error = 'Niedozwolony format numery konta';
            return false;
        }

        return true;
    }

    getExchangeRate() {
        return this.exchangeRatesApiService.getCurrency(this.choseProperCurrencyCode()).toPromise().then((exchangeRate) => {
            if (exchangeRate) {
                this.exchangeRate = exchangeRate;
            }
        }).catch((err) => {
            return null;
        });
    }

    choseProperCurrencyCode() {
        return this.isFirstCurrencyPLN() ? this.currency2.code : this.currency1.code;
    }

    isFirstCurrencyPLN() {
        return this.currency1.code === 'PLN';
    }

    cancel() {
        this.activeModal.dismiss('cancel');
    }

    acceptTransaction() {
        this.transactionFinished = true;
        return this.concludingTransactionsApiService.save(
            new TransactionDTO(
                this.option,
                this.value,
                this.currency1.code,
                this.transactionSum,
                this.currency2.code,
                this.exchangeRateForCurrencies,
                this.bankAccountK,
                this.bankAccountS,
                1
            )).subscribe((res) => {
            this.transactionId = res.text();
            this.broadcaster.broadcast('newTransactionAdded');
        });
    }

    cancelTransaction() {
        this.fieldsDisabled = false;
        this.showAcceptOrCancelTransaction = false
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
        this.getExchangeRate();
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
        this.getExchangeRate();
    }
}
