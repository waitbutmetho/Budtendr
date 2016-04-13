/// <reference path="../typings/jquery/jquery.d.ts" />
import { Component } from 'angular2/core';
import {Router, RouteConfig, RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchComponent} from './search.component';
import {DispensaryComponent} from './dispensary.component';
import {UserComponent} from './user.component';
import {SignUpComponent} from './signup.component';
import {AddDispensaryComponent} from './add-dispensary.component';
import {AddStrainComponent} from './add-strain.component';
import {AllStrainComponent} from './all-strain.component';
import {AllDispensariesComponent} from './all-dispensaries.component';
import {IndexComponent} from './index.component';
import {DataService} from './data.service';
import {HTTP_PROVIDERS} from 'angular2/http';


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [DataService, HTTP_PROVIDERS]
})
@RouteConfig([
  {path: '/', name: 'Index', component: IndexComponent  },
  {path: '/search', name: 'Search', component: SearchComponent  },
  {path: '/dispensary/:id', name: 'Dispensary', component: DispensaryComponent },
  {path: '/user', name: 'User', component: UserComponent },
  {path: '/sign-up', name: 'SignUp', component: SignUpComponent },
  {path: '/add-dispensary', name: 'AddDispensary', component: AddDispensaryComponent },
  {path: '/add-strain', name: 'AddStrain', component: AddStrainComponent },
  {path: '/all-strain', name: 'AllStrain', component: AllStrainComponent },
  {path: '/all-dispensaries', name: 'AllDispensaries', component: AllDispensariesComponent },
])
export class AppComponent {

  constructor(private _DataService: DataService){
    this._DataService.getDispensaries()
        .subscribe(dispensaries => console.log(dispensaries));

  }
  closeModal() {
    $('#login-overlay').modal('hide');
  }


}
