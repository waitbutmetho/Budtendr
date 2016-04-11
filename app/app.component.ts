import { Component } from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchComponent} from './search.component';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <ul>
      <li>Home</li>
      <li><a [routerLink]="['Search']">Search</a></li>
      <li>Dispensary</li>
      <li>User</li>
      <li>Sign Up</li>
    </ul>
  </header>
  <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/search', name: 'Search', component: SearchComponent  }
])
export class AppComponent {

}
