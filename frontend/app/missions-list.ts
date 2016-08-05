import { Component, OnInit } from '@angular/core';
import { Mission } from './models/mission';
import { MissionListItemComponent } from './mission-list-item';
import { MissionService } from './services/mission-service';
import { Observable } from 'rxjs/Rx';

@Component({
  directives: [
    MissionListItemComponent
  ],
  selector: 'missions-list',
  templateUrl: 'app/missions-list.html'
})

export class MissionsListComponent { 

constructor(private _missionService: MissionService) { };

    private missions: Observable<Mission[]>;

    ngOnInit() {
        this.missions = this._missionService.getMissions()
                                .catch((err)=> {
                                // don't do this, show the user a nice message
                                 console.log(err);
                                 // now we eat it, but only if the message has been communicated to the user
                                 return Observable.of(new Array<Mission>());
                             });
    }

}
