import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
    constructor(private http: Http) { }
    getMockData(): Observable<Response> {
        return this.http.get('http://www.mocky.io/v2/590212490f00006b18d2cb05');
    }
}