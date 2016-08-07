import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'congratulations',
    templateUrl: 'app/congratulations.component.html'
})
export class CongratulationsComponent implements OnInit {

    private missionSlug: string;
    private sub: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router) { }

    goToMission() {
        this._router.navigate([`/missions/${this.missionSlug}`]);
    }

    ngOnInit() {

        this.sub = this._route.params.subscribe(params => {
            if (params['slug'] !== undefined) {
                this.missionSlug = params['slug']
            }
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}