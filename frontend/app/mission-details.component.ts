import { Component, OnInit, OnDestroy} from '@angular/core';
import { Mission } from './models/mission';
import { MissionService } from './services/mission-service';
import { Observable } from 'rxjs/Rx';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mission-details',
    templateUrl: 'app/mission-details.component.html'
})
export class MissionDetailsComponent implements OnInit {

    private errorMessage: string;
    private mission: Mission;
    private sub: any;

    constructor(
        private _missionService: MissionService,
        private _route: ActivatedRoute) { }

    ngOnInit() {

        this.sub = this._route.params.subscribe(params => {
            if (params['slug'] !== undefined) {
                this._missionService.getMissionBySlug(params['slug'])
                    .subscribe(
                        m => this.mission = m,
                        err => this.errorMessage = err
                    );                    
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}