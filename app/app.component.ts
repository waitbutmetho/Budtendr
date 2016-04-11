import { Component } from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchComponent} from './search.component';
import {DispensaryComponent} from './dispensary.component';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <ul>
      <li>Home</li>
      <li><a [routerLink]="['Search']">Search</a></li>
      <li><a [routerLink]="['Dispensary']">Dispensary</a></li>
      <li>User</li>
      <li>Sign Up</li>
    </ul>
  </header>
  <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/search', name: 'Search', component: SearchComponent  },
  {path: '/dispensary', name: 'Dispensary', component: DispensaryComponent }
])
export class AppComponent {

}
