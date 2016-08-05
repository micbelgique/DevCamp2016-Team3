import { Component } from '@angular/core';

// decorator function that allows us to associate metadata with the component class
@Component({
  selector: 'missions-list',
  templateUrl: 'app/missions-list.html'
})

// we export AppComponent so that we can import it elsewhere in our application
export class MissionsListComponent { }
