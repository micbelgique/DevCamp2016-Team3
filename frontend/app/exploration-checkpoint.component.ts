import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Exploration } from './models/exploration';
import { ExplorationService } from './services/explorations.service';
import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';

import { AppSettings } from './app.settings';

@Component({
    selector: 'exploration-checkpoint',
    templateUrl: 'app/exploration-checkpoint.component.html',
    directives: [FILE_UPLOAD_DIRECTIVES]
})
export class ExplorationCheckpointComponent implements OnInit {
    public uploader:FileUploader
    private errorMessage: string;
    private exploration: Exploration;
    private checkpointSlug: String;
    private sub: any;

    constructor (
        private appSettings: AppSettings,
        private explorationService: ExplorationService,
        private route: ActivatedRoute
    ) {
        
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['slugcp'] !== undefined) {
                this.checkpointSlug = params['slugcp'];
            }

            if (params['slugex'] !== undefined) {
                this.explorationService.getExplorationBySlug(params['slugex'])
                    .subscribe(
                        exp => {
                            this.exploration = exp;
                            this.uploader = new FileUploader({
                                url: `${this.appSettings.baseUrl}/explorations/${this.exploration.slug}/checkpoints/${this.checkpointSlug}`
                            });
                            this.uploader.onAfterAddingFile = (file: any) => {
                                file.withCredentials = false;
                            };
                            this.uploader.onBuildItemForm = (item, form) => {
                                form.append("checkpoint", this.checkpointSlug);
                            };
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
