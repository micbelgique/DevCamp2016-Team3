import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { ExplorationService } from './services/explorations.service';
import { MissionService } from './services/missions.service';

// decorator function that allows us to associate metadata with the component class
@Component({
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    ExplorationService,
    HTTP_PROVIDERS,
    MissionService
  ],
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

// we export AppComponent so that we can import it elsewhere in our application
export class AppComponent { }
