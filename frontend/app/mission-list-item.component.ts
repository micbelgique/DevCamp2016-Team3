import { Component, Input, OnInit } from '@angular/core';
import { Mission } from './models/mission';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CategoryPipe } from './pipes/category.pipe';

@Component({
    directives: [
        ROUTER_DIRECTIVES
    ],
    selector: 'mission-list-item',
    templateUrl: 'app/mission-list-item.component.html',
    pipes: [CategoryPipe]
})
export class MissionListItemComponent implements OnInit {

    @Input() mission: Mission;

    constructor() { }

    ngOnInit() {

    }
}
