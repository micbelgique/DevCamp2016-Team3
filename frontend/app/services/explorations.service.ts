import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Exploration } from '../models/exploration'

import 'rxjs/add/operator/map';

const URL_EXPLORATIONS = 'http://localhost:3001/explorations';

@Injectable()
export class ExplorationService {

    constructor(private http: Http) { }

    getExploration(name: string): Observable<Exploration> {
        return this.http.get(URL_EXPLORATIONS)
            .map((response: Response) => <Exploration>response.json())
            .catch(this.handlerError);
    }

    private handlerError(err:any){
        console.log(err); 
        return Observable.throw(err);        
    }
}
