import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Mission } from './models/mission';
import { Observable } from 'rxjs/Rx';
import { MissionService } from './services/missions.service';
import { CategoryPipe } from './pipes/category.pipe';

@Component({
    selector: 'congratulations',
    templateUrl: 'app/congratulations.component.html',
    pipes: [CategoryPipe]
})
export class CongratulationsComponent implements OnInit {

    private errorMessage: string;
    private mission: Mission;
    private sub: any;

    constructor(private missionService: MissionService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['slug'] !== undefined) {
                this.missionService.getMissionBySlug(params['slug'])
                    .subscribe(
                    m => {
                        this.mission = m;
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
