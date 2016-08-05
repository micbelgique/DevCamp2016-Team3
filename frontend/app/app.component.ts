import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { MissionService } from './services/mission-service';
import { ROUTER_DIRECTIVES }  from '@angular/router';

// decorator function that allows us to associate metadata with the component class
@Component({
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    HTTP_PROVIDERS,
    MissionService
  ],
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

// we export AppComponent so that we can import it elsewhere in our application
export class AppComponent { }
