import {Component, OnInit} from '@angular/core';
import {ExchangeRatesApiService} from './exchange-rates-api.service';

@Component({
    selector: 'jhi-exchange-rates',
    templateUrl: './exchange-rates.component.html',
    styleUrls: [
        'exchangeRates.scss'
    ]
})
export class ExchangeRatesComponent implements OnInit {

    public values: any[];

    constructor(private exchangeRatesApiService: ExchangeRatesApiService) {
    }

    ngOnInit() {
        this.refresh()
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

}
