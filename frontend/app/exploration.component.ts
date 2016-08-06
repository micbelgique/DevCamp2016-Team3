import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Exploration } from './models/exploration';
import { ExplorationCheckpointSpotComponent } from './exploration-checkpoint-spot';
import { ExplorationService } from './services/explorations.service';

@Component({
    directives: [
        ExplorationCheckpointSpotComponent,
        ROUTER_DIRECTIVES
    ],
    selector: 'exploration',
    templateUrl: 'app/exploration.component.html'
})
export class ExplorationComponent implements OnInit {

    private errorMessage: string;
    private exploration: Exploration;
    private sub: any;

    constructor(
        private _route: ActivatedRoute,
        private _explorationService: ExplorationService,
        private _router: Router) { }

    goToCheckpoint() {
        this._router.navigate(['/explorations/' +
            this.exploration.slug +
            '/checkpoints/test-test']);
    }

    goToMission() {
        this._router.navigate(['/missions/' + this.exploration.mission.slug]);
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            if (params['slug'] !== undefined) {
                this._explorationService.getExplorationBySlug(params['slug'])
                    .subscribe(
                    exp => this.exploration = exp,
                    err => this.errorMessage = err
                    );
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}