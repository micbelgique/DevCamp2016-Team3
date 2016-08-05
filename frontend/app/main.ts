// Angular's browser bootstrap function
// Bootstrapping is platform-specific
// We might load it on a mobile device with Apache Cordova or NativeScript. 
// We might wish to render the first page of our application on the server to improve launch performance or facilitate SEO. 
// These targets require a different kind of bootstrap function that we'd import from a different library.
import { bootstrap }    from '@angular/platform-browser-dynamic';

//The application root component
import { AppComponent } from './app.component';

bootstrap(AppComponent);
