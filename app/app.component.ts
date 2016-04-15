/// <reference path="../resources/jquery/jquery.d.ts" />
/// <reference path="../resources/jquery/jquery.simplemodal.d.ts" />
import { Component } from 'angular2/core';
import {Router, RouteConfig, RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchComponent} from './search.component';
import {DispensaryComponent} from './dispensary.component';
import {AllStrainComponent} from './all-strain.component';
import {AllDispensariesComponent} from './all-dispensaries.component';
import {IndexComponent} from './index.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
@RouteConfig([
  {path: '/', name: 'Index', component: IndexComponent  },
  {path: '/search/:term', name: 'Search', component: SearchComponent  },
  {path: '/dispensary/:id', name: 'Dispensary', component: DispensaryComponent },
  {path: '/all-strain', name: 'AllStrain', component: AllStrainComponent },
  {path: '/all-dispensaries', name: 'AllDispensaries', component: AllDispensariesComponent },
])
export class AppComponent {
  constructor(private _router: Router){
  }
  search(values) {
    if(values.search) {
      this._router.navigate(['Search', {term: values.search}]);
    }
  }
}
