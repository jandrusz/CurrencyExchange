import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

@Injectable()
export class ExchangeRatesApiService  {
    constructor(private http: Http) { }

    get(): Observable<any> {
        return this.http.get(SERVER_API_URL + 'api/exchange-rates').map((res: Response) => res.json());
    }

    getCurrency(currency): Observable<any> {
        return this.http.get(SERVER_API_URL + 'api/exchange-rates/' + currency).map((res: Response) => res.json());
    }

}
