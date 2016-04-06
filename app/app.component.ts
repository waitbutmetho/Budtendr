import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router/';
import { NavBarComponent } from './nav-bar.component';
import { StrainListComponent } from './strain-list.component';

@Component({
  selector: 'my-app',
  directives: [NavBarComponent],
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path:'/strains', name: 'StrainList', component: StrainListComponent}
])
export class AppComponent {

}
