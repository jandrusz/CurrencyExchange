import { Routes } from '@angular/router';

import {
    transactionsHistoryRoute,
    exchangeRatesRoute,
    concludingTransactionsRoute
} from './';

const MENU_ROUTES = [
    transactionsHistoryRoute,
    exchangeRatesRoute,
    concludingTransactionsRoute
];

export const accountState: Routes = [{
    path: '',
    children: MENU_ROUTES
}];
