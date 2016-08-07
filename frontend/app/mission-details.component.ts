import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { CategoryPipe } from './pipes/category.pipe';
import { CheckpointListComponent } from './checkpoint-list.component';
import { animate, Component, OnInit, OnDestroy, transition, state, style, trigger} from '@angular/core';
import { Exploration } from './models/exploration';
import { Mission } from './models/mission';
import { Observable } from 'rxjs/Rx';

import { ExplorationService } from './services/explorations.service';
import { MissionService } from './services/missions.service';

@Component({
    animations: [
        trigger('componentState', [
            state('displayed', style({
                transform: 'translateX(0%)'
            })),
            state('hidden', style({
                transform: 'translateX(100%)'
            })),
            transition('hidden => displayed', animate('200ms ease-in')),
            transition('displayed <=> hidden', animate('200ms ease-out')),
        ])
    ],
    selector: 'mission-details',
    templateUrl: 'app/mission-details.component.html',
    directives: [CheckpointListComponent],
    pipes: [CategoryPipe]
})
export class MissionDetailsComponent implements OnInit {

    goToExplorationLabel: String = "DEMARRER";
    hasLoaded: Boolean;
    state: String;

    private errorMessage: string;
    private exploration: Exploration;
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
                                    this.goToExplorationLabel = "CONTINUER";
                                }

                                this.hasLoaded = true;
                                this.state = 'hidden';
                                setTimeout(()=> this.state = "displayed");
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
