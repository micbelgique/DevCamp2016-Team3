import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Mission } from '../models/mission'

import 'rxjs/add/operator/map';

//const URL_MISSIONS = 'app/services/missions.json';
const URL_MISSIONS = 'http://localhost:3001/missions';


@Injectable()
export class MissionService {

    constructor(private _http: Http) { }

    getMissions(): Observable<Mission[]> {
        return this._http.get(URL_MISSIONS)
            .map((response: Response) => <Mission[]>response.json())
            .catch(this._handlerError);
    }

    _handlerError(err:any){
        console.log(err); 
        return Observable.throw(err);        
    }
}