import { Component } from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchComponent} from './search.component';
import {DispensaryComponent} from './dispensary.component';
import {UserComponent} from './user.component';
import {SignUpComponent} from './signup.component';
import {AddDispensaryComponent} from './add-dispensary.component';
import {AddStrainComponent} from './add-strain.component';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <ul>
      <li>Home</li>
      <li><a [routerLink]="['Search']">Search</a></li>
      <li><a [routerLink]="['Dispensary']">Dispensary</a></li>
      <li><a [routerLink]= "['User']"> User</a></li>
      <li><a [routerLink]="['SignUp']">Sign Up</a></li>
      <li><a [routerLink]="['AddDispensary']">Add Dispensary</a></li>
      <li><a [routerLink]="['AddStrain']">Add Strain</a></li>
    </ul>
  </header>
  <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/search', name: 'Search', component: SearchComponent  },
  {path: '/dispensary', name: 'Dispensary', component: DispensaryComponent },
  {path: '/user', name: 'User', component: UserComponent },
  {path: '/sign-up', name: 'SignUp', component: SignUpComponent },
  {path: '/add-dispensary', name: 'AddDispensary', component: AddDispensaryComponent },
  {path: '/add-strain', name: 'AddStrain', component: AddStrainComponent },

])
export class AppComponent {

}
