import { Component } from 'angular2/core';
import { DataService } from './data.service';
import { RouteParams, Router } from 'angular2/router';


@Component({
  providers: [DataService],
    templateUrl: "app/templates/dispensary-admin.component.html" ,
})

export class DispensaryAdminComponent{
dispensary = [];
  constructor(params: RouteParams, private _dataService: DataService, private _router: Router) {
    if(this._dataService.loggedIn() && this._dataService.getUser().dispensary_id == params.get('id')) {
      this.getDispensary(params.get('id'));
    } else {
      if(parseInt(params.get('id')) > 0) {
        this._router.navigate(['Dispensary', { id: params.get('id')}]);
      } else {
        this._router.navigate(['Index']);
      }
    }
  }
  getDispensary(id) {
    this._dataService.getDispensary(id).subscribe(resp => {
      if( resp.status == undefined ) {
        var res = <any>resp;
        this.dispensary = res.dispensary;
        console.log(resp);
      } else {
        this._router.navigate(['Index']);
      }
    });
  }
  onSubmit(form) {
    var values = [];
    values.push(this.dispensary['id']);
    values.push(form['name']);
    values.push(form['address']);
    values.push(form['city']);
    values.push(form['state']);
    values.push(form['phone']);
    values.push(form['email']);
    values.push(form['hours']);
    values.push(form['bio']);
    values.push(form['icon']);
    var self = this;
    this._dataService.editDispensary(values).subscribe(function(res){
      self._router.navigate(['Dispensary', { id: self.dispensary['id'] }]);
    });
  }
}
