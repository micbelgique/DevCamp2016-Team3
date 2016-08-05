import { Component } from '@angular/core';
import { MissionsListComponent } from './missions-list';

// decorator function that allows us to associate metadata with the component class
@Component({
  directives: [
    MissionsListComponent
  ],
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

// we export AppComponent so that we can import it elsewhere in our application
export class AppComponent { }
