import { Component, OnInit } from '@angular/core';
import { MissionListItemComponent } from './mission-list-item';
import { Mission } from './models/mission';
import { MissionService } from './services/mission-service';
import { Observable } from 'rxjs/Rx';

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

constructor(private _missionService: MissionService) { };

    // get from service later on
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
