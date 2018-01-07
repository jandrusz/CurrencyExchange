import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import {ExchangeRatesComponent} from './exchange-rates.component';

export const exchangeRatesRoute: Route = {
    path: 'exchangeRates',
    component: ExchangeRatesComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'ExchangeRates'
    },
    canActivate: [UserRouteAccessService]
};
