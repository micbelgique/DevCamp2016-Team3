import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

// decorator function that allows us to associate metadata with the component class
@Component({
  directives: [
    ROUTER_DIRECTIVES
  ],
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

// we export AppComponent so that we can import it elsewhere in our application
export class AppComponent { }
