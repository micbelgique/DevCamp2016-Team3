import { Component } from '@angular/core';

// decorator function that allows us to associate metadata with the component class
@Component({
  selector: 'my-app',
  template: '<h1>Hello World</h1>'
})

// we export AppComponent so that we can import it elsewhere in our application
export class AppComponent { }
