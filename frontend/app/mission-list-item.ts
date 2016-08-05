import { Component, Input, OnInit } from '@angular/core';
import { MissionSummary } from './models/mission-summary';

@Component({
    selector: 'mission-list-item',
    templateUrl: 'app/mission-list-item.html'
})
export class MissionListItemComponent implements OnInit {
    
    @Input() mission: MissionSummary;
   
    constructor() { }

    ngOnInit() { 

    }
}