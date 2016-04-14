/// <reference path="../resources/jquery/jquery.d.ts" />
/// <reference path="../resources/jquery/jquery.simplemodal.d.ts" />
import { Component } from 'angular2/core';
import {Router, RouteConfig, RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchComponent} from './search.component';
import {DispensaryComponent} from './dispensary.component';
import {DispensaryAdminComponent} from './dispensary-admin.component';
import {UserComponent} from './user.component';
import {SignUpComponent} from './signup.component';
import {AddDispensaryComponent} from './add-dispensary.component';
import {AddStrainComponent} from './add-strain.component';
import {AllStrainComponent} from './all-strain.component';
import {AllDispensariesComponent} from './all-dispensaries.component';
import {IndexComponent} from './index.component';
import {DataService} from './data.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import { EditStrainComponent } from './edit-strain.component';

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
  {path: '/dispensaryAdmin/:id', name: 'DispensaryAdmin', component: DispensaryAdminComponent},
  {path: '/user', name: 'User', component: UserComponent },
  {path: '/sign-up', name: 'SignUp', component: SignUpComponent },
  {path: '/add-dispensary', name: 'AddDispensary', component: AddDispensaryComponent },
  {path: '/add-strain', name: 'AddStrain', component: AddStrainComponent },
  {path: '/all-strain', name: 'AllStrain', component: AllStrainComponent },
  {path: '/all-dispensaries', name: 'AllDispensaries', component: AllDispensariesComponent },
  {path: '/manageMenu', name: 'ManageMenu', component: EditStrainComponent },
])
export class AppComponent {
  user;
  constructor(private _dataService: DataService, private _router: Router){
    console.log(this._dataService);
    this._dataService.getDispensaries()
        .subscribe(dispensaries => console.log(dispensaries));
  }
  closeModal() {
    $('#login-overlay').modal('hide');
  }
  login(form) {
    var self = this;
    this._dataService.login(form.username, form.password).subscribe(function(res) {
      self.user = res.user;
      self._router.navigate(['User']);
      $('#login-overlay').modal('hide');
    });
  }
}
