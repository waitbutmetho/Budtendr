import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import { DataService } from './data.service';
import { ROUTER_PROVIDERS } from "angular2/router";
// import { COMMON_DIRECTIVES } from 'angular2/platform/browser';
import 'rxjs/Rx';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, DataService]);
