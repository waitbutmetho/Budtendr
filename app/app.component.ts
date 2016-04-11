import { Component } from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
  <
  <header>
    <ul>
      <li>Home</li>
      <li>Search</li>
      <li>Dispensary</li>
      <li>User</li>
      <li>Sign Up</li>
    </ul>
  </header>
  `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([

])
export class AppComponent {

}
