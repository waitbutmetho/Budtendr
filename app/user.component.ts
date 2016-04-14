import { Component } from 'angular2/core';
import { DataService } from './data.service';
import { RouteParams } from 'angular2/router';


@Component({
  providers: [DataService],
    templateUrl: "app/templates/user.component.html" ,
})

export class UserComponent{
  editUserForm() {
    $('#userForm').toggle();
  }
}
