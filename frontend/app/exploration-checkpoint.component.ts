import { Component, OnInit } from '@angular/core';
import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';

import { AppSettings } from './app.settings';

@Component({
    selector: 'exploration-checkpoint',
    templateUrl: 'app/exploration-checkpoint.component.html',
    directives: [FILE_UPLOAD_DIRECTIVES]
})
export class ExplorationCheckpointComponent implements OnInit {
    public uploader:FileUploader

    constructor (appSettings: AppSettings) {
        this.uploader = new FileUploader({
            url: `${appSettings.baseUrl}/explorations/xxx/checkpoints/yyy` // TODO
        });
        this.uploader.onBuildItemForm = (item, form) => {
            form.append("checkpoint", "yyy"); // TODO
        };
    }

    ngOnInit() { }
}
