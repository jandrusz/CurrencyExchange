import {Component, OnInit} from '@angular/core';
import {TransactionsHistoryApiService} from './transactions-history-api.service';
import {Broadcaster} from '../../shared/broadcaster/broadcaster';

@Component({
    selector: 'jhi-transactions-history',
    templateUrl: './transactions-history.component.html',
    styleUrls: [
        'transactionsHistory.scss'
    ]
})
export class TransactionsHistoryComponent implements OnInit {

    public values: any[];
    public loaded: boolean;

    constructor(private transactionsHistoryApiService: TransactionsHistoryApiService,
                private broadcaster: Broadcaster) {
    }

    ngOnInit() {
        this.reloadData();
        this.broadcaster.on('newTransactionAdded').subscribe((message) => {
            this.reloadData();
        });
    }

    reloadData() {
        this.transactionsHistoryApiService.get().toPromise().then((values) => {
            if (values) {
                this.values = this.formatData(values);
                this.loaded = true;
            }
        }).catch((err) => {
            return null;
        });
    }

    formatData(values) {
        for (let i = 0; i < values.length; i++) {
            values[i].inclusionDate = values[i].inclusionDate.replace('T', ' ');
            values[i].insertedAmount = values[i].insertedAmount.toFixed(2);
            values[i].calculatedAmount = values[i].calculatedAmount.toFixed(2);
            values[i].side = values[i].side === 'S' ? 'Sprzedaż' : 'Kupno';
        }
        return values;
    }

    getClass(index) {
        if (index % 2 === 0) {
            return 'transactions-history-value-row'
        }
    }

    transactionsExists() {
        return this.values.length !== 0;
    }

}
