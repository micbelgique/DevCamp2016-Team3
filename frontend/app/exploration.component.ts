import { Component, OnInit } from '@angular/core';
import { ExplorationService } from './services/explorations.service';
import { Router } from '@angular/router';

@Component({
    selector: 'exploration',
    templateUrl: 'app/exploration.component.html'
})
export class ExplorationComponent implements OnInit {

    constructor(
        private _explorationService: ExplorationService,
        private _router: Router) { }

    goToCheckpoint() {
        this._router.navigate(['/explorations/test-test/checkpoints/test-test']);
    }

    ngOnInit() { }

}