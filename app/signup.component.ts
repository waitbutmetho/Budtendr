import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    template: `
      <div class="container">
        <form class="form-horizontal">
        <h3>Sign up for a Budtendr account</h3>
          <div class="form-group">
            <label class="control-label col-sm-2" for="username">Username</label>
            <div class="col-sm-10">
                  <input type="text" class="form-control" id="username">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="password">Password</label>
            <div class="col-sm-10">
                  <input type="text" class="form-control" id="password">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="confirm-password">Confirm Password</label>
            <div class="col-sm-10">
                  <input type="text" class="form-control" id="confirm-password">
            </div>
          </div>
              <button class="btn btn-success">Submit</button>
        </form>
        <button (click)="onNavigate()" class="btn btn-primary">I'm a Dispensary Owner</button>
      </div>

    `,
})

export class SignUpComponent{

  constructor(private _router: Router){

  }
  onNavigate(){
    this._router.navigate(['AddDispensary']);
  }
}