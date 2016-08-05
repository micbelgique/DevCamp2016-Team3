import { Component, OnInit, OnDestroy} from '@angular/core';
import { Mission } from './models/mission';
import { MissionService } from './services/mission-service';
import { Observable } from 'rxjs/Rx';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mission-details',
    templateUrl: 'app/mission-details.html'
})
export class MissionDetailsComponent implements OnInit {

    private mission: Observable<Mission>;
    private sub: any;

    constructor(
        private _missionService: MissionService,
        private _route: ActivatedRoute) { }

    ngOnInit() {

        this.sub = this._route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                this.mission = this._missionService.getMission(params['id'])
                    .catch((err) => {
                        console.log(err);
                        // now we eat it, but only if the message has been communicated to the user
                        return Observable.of(null);
                    });
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}