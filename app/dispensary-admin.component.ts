import { Component } from 'angular2/core';
import { DataService } from './data.service';
import { RouteParams } from 'angular2/router';


@Component({
  providers: [DataService],
    templateUrl: "app/templates/dispensary-admin.component.html" ,
})

export class DispensaryAdminComponent{
dispensary = [];
  constructor(params: RouteParams, private _dataService: DataService) {
    this.getDispensary(params.get('id'));
  }

  getDispensary(id) {
    this._dataService.getDispensary(id).subscribe(resp => this.dispensary = resp.dispensary);
  }
  editDispForm() {
    console.log('showform');
    $('#dispForm').toggle();
  }
  onSubmit(form) {
    var values = [];
    values.push(form['name']);
    values.push(form['address']);
    values.push(form['city']);
    values.push(form['state']);
    values.push(form['phone']);
    values.push(form['email']);
    values.push(form['hours']);
    values.push(form['bio']);
    values.push(form['icon']);
    this._dataService.editDispensary(values).subscribe(function(res){
      console.log(res);
    });
  }
}
