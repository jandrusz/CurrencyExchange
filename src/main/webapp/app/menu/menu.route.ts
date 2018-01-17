import { Routes } from '@angular/router';

import {
    transactionsHistoryRoute,
    exchangeRatesRoute
} from './';

const MENU_ROUTES = [
    transactionsHistoryRoute,
    exchangeRatesRoute
];

export const accountState: Routes = [{
    path: '',
    children: MENU_ROUTES
}];
