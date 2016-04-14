import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { DataService } from './data.service';

@Component({
  providers: [DataService],
    templateUrl: "app/templates/signup.component.html" ,
    styleUrls: ['../build/css/sign-up.component.css'],
})
export class SignUpComponent{
  onSubmit(form) {
    if(form['password'] === form['confirm-password']) {
      var values = [];
      values.push(form['username']);
      values.push(form['email']);
      values.push(form['password']);
      var self = this;
      this._dataService.signUp(values).subscribe(function(res){
        if(!res.error) {
          self._router.navigate(['User']);
        } else {
          console.log("Signup", res.errormsg);
        }
      });
    } else {
      // THE PASSWORDS DONT MATCH
    }
  }
  constructor(private _router: Router, private _dataService: DataService){
  }
  onNavigate(){
    this._router.navigate(['AddDispensary']);
  }
}
