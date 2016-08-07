import { Component, Input, OnInit } from '@angular/core';
import { Exploration } from './models/exploration';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives:[
        ROUTER_DIRECTIVES
    ],
    selector: 'exploration-checkpoint-spot',
    templateUrl: 'app/exploration-checkpoint-spot.component.html'
})
export class ExplorationCheckpointSpotComponent implements OnInit {
    
    @Input() exploration: Exploration;
    @Input() checkpointSlug: string;
    imageSrc: String;

    private isCompleted: boolean;

    constructor() { }

    ngOnInit() {
        const checkpoint = this.exploration.mission.checkpoints.filter(
            item => item.slug === this.checkpointSlug
        )[0];
        const completed = this.exploration.completed.filter(
            item => item.checkpoint === this.checkpointSlug
        );
        this.imageSrc = `assets/images/missions-map/${checkpoint.placeholder}`;

        if (completed.length > 0)
        {
            this.isCompleted = true;
            this.imageSrc = `http://localhost:3001/uploads/${completed[0].file}`;
        }
    }
}
