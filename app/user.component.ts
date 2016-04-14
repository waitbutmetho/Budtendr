import { Component } from 'angular2/core';
import { DataService } from './data.service';
import { RouteParams, Router } from 'angular2/router';

@Component({
  providers: [DataService],
  templateUrl: "app/templates/user.component.html" ,
})
export class UserComponent{
  loginname = 'username';
  loginemail = 'email@email.com';
  dispensary_id = 0;
  constructor(private _router: Router, private _dataService: DataService) {
    console.log("User Comp. Logged in: ", this._dataService.loggedIn());
    if(this._dataService.loggedIn()) {
      var user = this._dataService.getUser();
      this.loginname = user.username;
      this.loginemail = user.email;
      this.dispensary_id = user.dispensary_id;
      console.log(user, this);
      console.log("username", this.loginname);
    } else {
      this._router.navigate(['Index']);
      $('#login-overlay').modal('show');
    }
  }
  editUserForm() {
    $('#userForm').toggle();
  }
}
