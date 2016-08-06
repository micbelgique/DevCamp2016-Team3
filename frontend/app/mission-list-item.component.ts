import { Component, Input, OnInit } from '@angular/core';
import { Mission } from './models/mission';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [
        ROUTER_DIRECTIVES
    ],
    selector: 'mission-list-item',
    templateUrl: 'app/mission-list-item.component.html'
})
export class MissionListItemComponent implements OnInit {

    @Input() mission: Mission;

    constructor() { }

    ngOnInit() {

    }
}