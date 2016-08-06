import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { CategoryPipe } from './pipes/category.pipe';
import { CheckpointListComponent } from './checkpoint-list.component';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Exploration } from './models/exploration';
import { Mission } from './models/mission';
import { Observable } from 'rxjs/Rx';

import { ExplorationService } from './services/explorations.service';
import { MissionService } from './services/missions.service';

@Component({
    selector: 'mission-details',
    templateUrl: 'app/mission-details.component.html',
    directives: [CheckpointListComponent],
    pipes: [CategoryPipe]
})
export class MissionDetailsComponent implements OnInit {

    private errorMessage: string;
    private exploration: Exploration = null;
    private mission: Mission;
    private sub: any;

    constructor(
        private _explorationService: ExplorationService,
        private _missionService: MissionService,
        private _route: ActivatedRoute,
        private _router: Router) { }

    goToExploration() {

        if (this.exploration) {
            this._router.navigate(['/explorations/' + this.exploration.slug])
        } else {
            this._explorationService.createExploration(this.mission.id, this.mission.name)
                .subscribe(
                exploration => this._router.navigate(['/explorations/' + exploration.slug]),
                err => this.errorMessage = err
                );
        }
    }

    goToList() {
        this._router.navigate(['/missions']);
    }

    ngOnInit() {

        this.sub = this._route.params.subscribe(params => {
            if (params['slug'] !== undefined) {
                this._missionService.getMissionBySlug(params['slug'])
                    .subscribe(
                    m => {
                        this.mission = m;
                        this._explorationService.getExplorationsByMission(this.mission.id)
                            .subscribe(
                            explorations => {
                                if (explorations.length > 0) {
                                    this.exploration = explorations[0];
                                }
                            },
                            err => this.errorMessage = err
                            );
                    },
                    err => this.errorMessage = err
                    );
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }



}
