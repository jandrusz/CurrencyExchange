import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {SERVER_API_URL} from '../../app.constants';

@Injectable()
export class TransactionsHistoryApiService  {
    constructor(private http: Http) { }

    get(): Observable<any> {
        return this.http.get(SERVER_API_URL + 'api/transaction/get').map((res: Response) => res.json());
    }
}
