import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Mission } from '../models/mission'
import 'rxjs/add/operator/map';

import { AppSettings } from "../app.settings";

@Injectable()
export class MissionService {

    constructor(private appSettings: AppSettings, private http: Http) { }

    getMissions(): Observable<Mission[]> {
        return this.http.get(`${this.appSettings.baseUrl}/missions`)
            .map((response: Response) => <Mission[]>response.json())
            .catch(this._handlerError);
    }

    getMissionBySlug(slug: string): Observable<Mission> {
        return this.http.get(`${this.appSettings.baseUrl}/missions/${slug}`)
            .map((response: Response) => <Mission>response.json())
            .catch(this._handlerError);
    }

    _handlerError(err:any){
        console.log(err); 
        return Observable.throw(err);        
    }
}
