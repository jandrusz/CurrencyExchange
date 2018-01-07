import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import {ConcludingTransactionsRouteComponent} from './concluding-transactions.component';

export const concludingTransactionsRoute: Route = {
    path: 'concludingTransactions',
    component: ConcludingTransactionsRouteComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'concludingTransactions'
    },
    canActivate: [UserRouteAccessService]
};
