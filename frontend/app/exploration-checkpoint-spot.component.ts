import { Component, Input, OnInit } from '@angular/core';
import { Exploration } from './models/exploration';
import { Checkpoint } from './models/checkpoint';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AppSettings } from './app.settings';

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
    checkpoint: Checkpoint;

    private isCompleted: boolean;

    constructor(private appSettings: AppSettings) { }

    ngOnInit() {
        this.checkpoint = this.exploration.mission.checkpoints.filter(
            item => item.slug === this.checkpointSlug
        )[0];
        const completed = this.exploration.completed.filter(
            item => item.checkpoint === this.checkpointSlug
        );
        this.imageSrc = `assets/images/missions-map/${this.checkpoint.placeholder}`;

        if (completed.length > 0)
        {
            this.isCompleted = true;
            this.imageSrc = `${this.appSettings.baseUrl}/uploads/${completed[0].file}`;
        }
    }
}
