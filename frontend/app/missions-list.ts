import { Component } from '@angular/core';
import { MissionListItemComponent } from './mission-list-item';
import { MissionSummary } from './models/mission-summary';

// decorator function that allows us to associate metadata with the component class
@Component({
  directives: [
    MissionListItemComponent
  ],
  selector: 'missions-list',
  templateUrl: 'app/missions-list.html'
})

// we export AppComponent so that we can import it elsewhere in our application
export class MissionsListComponent { 

    // get from service later on
    private missions: MissionSummary[] = [
        new MissionSummary("mission 1"),
        new MissionSummary("mission 2"),
        new MissionSummary("mission 3"),
        new MissionSummary("mission 4"),
        new MissionSummary("mission 5")
    ];

    constructor() { }

}
