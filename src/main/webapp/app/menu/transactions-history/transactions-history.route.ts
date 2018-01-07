import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { TransactionsHistoryComponent } from './transactions-history.component';

export const transactionsHistoryRoute: Route = {
    path: 'transactionsHistory',
    component: TransactionsHistoryComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'TransactionsHistory'
    },
    canActivate: [UserRouteAccessService]
};
