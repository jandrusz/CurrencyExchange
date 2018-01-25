import {Component, OnDestroy, OnInit} from '@angular/core';
import {ExchangeRatesApiService} from './exchange-rates-api.service';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Component({
    selector: 'jhi-exchange-rates',
    templateUrl: './exchange-rates.component.html',
    styleUrls: [
        'exchangeRates.scss'
    ]
})
export class ExchangeRatesComponent implements OnInit, OnDestroy {

    public values: any[];
    private alive: boolean;

    constructor(private exchangeRatesApiService: ExchangeRatesApiService) {
        this.alive = true;
    }

    ngOnInit() {
        this.refresh();
        IntervalObservable.create(60000)
            .takeWhile(() => this.alive)
            .subscribe(() => {
                this.refresh();
            });
    }

    refresh() {
        return this.exchangeRatesApiService.get().toPromise().then((values) => {
            if (values) {
                this.values = values;
            }
        }).catch((err) => {
            return null;
        });
    }

    ngOnDestroy() {
        this.alive = false;
    }

    getClass(index){
        if(index%2 === 0){
            return 'exchange-rates-value-row'
        }
    }


}
