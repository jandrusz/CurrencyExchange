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

@NgModule({
    imports: [
        CurrencyExchangeSharedModule,
        RouterModule.forRoot(accountState, { useHash: true })
    ],
    declarations: [
        TransactionsHistoryComponent,
        ExchangeRatesComponent,
        ConcludingTransactionsModalComponent
    ],
    entryComponents: [ConcludingTransactionsModalComponent],
    providers: [
        ConcludingTransactionsModalService,
        ConcludingTransactionsApiService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CurrencyExchangeMenuModule {}
