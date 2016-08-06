import { Component, OnInit, OnDestroy} from '@angular/core';
import { Mission } from './models/mission';
import { MissionService } from './services/mission-service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { CheckpointListComponent } from './checkpoint-list.component';
import { CategoryPipe } from './pipes/category.pipe';

@Component({
    selector: 'mission-details',
    templateUrl: 'app/mission-details.component.html',
    directives: [CheckpointListComponent],
    pipes: [CategoryPipe]
})
export class MissionDetailsComponent implements OnInit {

    private errorMessage: string;
    private mission: Mission;
    private sub: any;

    constructor(
        private _missionService: MissionService,
        private _route: ActivatedRoute,
        private _router: Router) { }

    goToMap() {
        this._router.navigate(['/missions/' + this.mission.slug + '/map']);
    }

    goToList() {
        this._router.navigate(['/missions']);
    }

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
