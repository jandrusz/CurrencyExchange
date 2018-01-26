import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ExchangeRatesApiService} from '../menu/exchange-rates/exchange-rates-api.service';

import {
    CurrencyExchangeSharedLibsModule,
    CurrencyExchangeSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    JhiLoginModalComponent,
    Principal,
    HasAnyAuthorityDirective,
} from './';
import {Broadcaster} from './broadcaster/broadcaster';

@NgModule({
    imports: [
        CurrencyExchangeSharedLibsModule,
        CurrencyExchangeSharedCommonModule
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        ExchangeRatesApiService,
        DatePipe,
        Broadcaster
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        CurrencyExchangeSharedCommonModule,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CurrencyExchangeSharedModule {
}
