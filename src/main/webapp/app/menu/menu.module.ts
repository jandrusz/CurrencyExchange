import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CurrencyExchangeSharedModule } from '../shared';

import {
    TransactionsHistoryComponent,
    ExchangeRatesComponent,
    ConcludingTransactionsModalService,
    ConcludingTransactionsModalComponent,
    accountState
} from './';
import {ConcludingTransactionsApiService} from './concluding-transactions/concluding-transactions-api.service';
import {TransactionsHistoryApiService} from './transactions-history/transactions-history-api.service';
import {OnlyNumber} from './concluding-transactions/only-number.directive';
import {OnlyAmount} from './concluding-transactions/only-amount.directive';

@NgModule({
    imports: [
        CurrencyExchangeSharedModule,
        RouterModule.forRoot(accountState, { useHash: true })
    ],
    declarations: [
        TransactionsHistoryComponent,
        ExchangeRatesComponent,
        ConcludingTransactionsModalComponent,
        OnlyNumber,
        OnlyAmount
    ],
    entryComponents: [ConcludingTransactionsModalComponent],
    providers: [
        ConcludingTransactionsModalService,
        ConcludingTransactionsApiService,
        TransactionsHistoryApiService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CurrencyExchangeMenuModule {}
