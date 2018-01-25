import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {SERVER_API_URL} from '../../app.constants';

@Injectable()
export class ConcludingTransactionsApiService  {
    constructor(private http: Http) { }

    get(): Observable<any> {
        return this.http.get(SERVER_API_URL + 'api/available-currencies').map((res: Response) => res.json());
    }

    save(transaction: any): Observable<Response> {
        return this.http.post(SERVER_API_URL + 'api/transaction/save', transaction);
    }

}
