import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Exploration } from '../models/exploration'
import 'rxjs/add/operator/map';

import { AppSettings } from "../app.settings";

@Injectable()
export class ExplorationService {

    constructor(private appSettings: AppSettings, private http: Http) { }

    createExploration(missionId: string, name: string): Observable<Exploration> {
        return this.http.post(`${this.appSettings.baseUrl}/explorations`, {
            mission: missionId,
            name: name
        })
            .map((response: Response) => <Exploration>response.json())
            .catch(this.handlerError);
    }

    getExplorationBySlug(slug: string): Observable<Exploration> {
        return this.http.get(`${this.appSettings.baseUrl}/explorations` + '/' + slug)
            .map((response: Response) => <Exploration>response.json())
            .catch(this.handlerError);
    }

    getExplorations(): Observable<Exploration[]> {
        return this.http.get(`${this.appSettings.baseUrl}/explorations`)
            .map((response: Response) => <Exploration[]>response.json())
            .catch(this.handlerError);
    }

    getExplorationsByMission(missionId: string): Observable<Exploration[]> {
        return this.http.get(`${this.appSettings.baseUrl}/explorations`)
            .map((response: Response) => {
                                        var exps: Exploration[] = <Exploration[]>response.json();
                                        exps = exps.filter(e =>e.mission.id == missionId );
                                        return exps;
                                        })
            .catch(this.handlerError);
    }

    private handlerError(err: any) {
        console.log(err);
        return Observable.throw(err);
    }
}
