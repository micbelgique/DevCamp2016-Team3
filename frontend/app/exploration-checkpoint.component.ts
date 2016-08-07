import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Exploration } from './models/exploration';
import { Checkpoint } from './models/checkpoint';
import { ExplorationService } from './services/explorations.service';
import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';
import { CategoryPipe } from './pipes/category.pipe';

import { AppSettings } from './app.settings';

@Component({
    selector: 'exploration-checkpoint',
    templateUrl: 'app/exploration-checkpoint.component.html',
    directives: [FILE_UPLOAD_DIRECTIVES],
    pipes: [CategoryPipe]
})
export class ExplorationCheckpointComponent implements OnInit {
    public uploader: FileUploader
    imageSrc: String;
    isCompleted: Boolean;
    private errorMessage: string;
    private exploration: Exploration;
    private checkpoint: Checkpoint;
    private checkpointSlug: String;
    private sub: any;
    private timeout: any;

    constructor (
        private appSettings: AppSettings,
        private explorationService: ExplorationService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

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
                            this.checkpoint = exp.mission.checkpoints.filter(item => item.slug === this.checkpointSlug)[0];
                            this.uploader = new FileUploader({
                                url: `${this.appSettings.baseUrl}/explorations/${this.exploration.slug}/checkpoints/${this.checkpointSlug}`
                            });
                            this.uploader.onAfterAddingFile = (file: any) => {
                                file.withCredentials = false;
                            };
                            this.uploader.onBuildItemForm = (item, form) => {
                                form.append("checkpoint", this.checkpointSlug);
                            };
                            this.uploader.onCompleteItem = () => {
                                this.router.navigate([`/missions/${this.exploration.mission.slug}/congratulations`]);
                            }

                            const completed = this.exploration.completed.filter(
                                item => item.checkpoint === this.checkpointSlug
                            );
                            this.imageSrc = `assets/images/missions-map/${this.checkpoint.placeholder}`;

                            if (completed.length > 0)
                            {
                                this.isCompleted = true;
                                this.imageSrc = `${this.appSettings.baseUrl}/uploads/${completed[0].file}`;
                            }
                        },
                        err => this.errorMessage = err
                    );
            }
        });

        this.timeout = setInterval(() => {
            if (this.uploader.getNotUploadedItems().length > 0) {
                this.uploader.uploadAll();
                clearTimeout(this.timeout);
            }
        }, 250);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    browse () {
        document.getElementById("fileUploader").click();
    }
}
