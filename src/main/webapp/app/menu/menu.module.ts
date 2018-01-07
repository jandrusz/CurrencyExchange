import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CurrencyExchangeSharedModule } from '../shared';

import {
    TransactionsHistoryComponent,
    ExchangeRatesComponent,
    ConcludingTransactionsRouteComponent,
    accountState
} from './';

@NgModule({
    imports: [
        CurrencyExchangeSharedModule,
        RouterModule.forRoot(accountState, { useHash: true })
    ],
    declarations: [
        TransactionsHistoryComponent,
        ExchangeRatesComponent,
        ConcludingTransactionsRouteComponent
    ],
    providers: [

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CurrencyExchangeMenuModule {}
