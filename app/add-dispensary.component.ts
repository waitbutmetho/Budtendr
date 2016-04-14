import { Component } from 'angular2/core';
import { DataService } from './data.service';

@Component({
  providers: [DataService],
    templateUrl: 'app/templates/add-dispensary.component.html',

})

export class AddDispensaryComponent{
  constructor(private _dataService: DataService){
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
    this._dataService.addDispensary(values).subscribe(function(res){
      console.log(res);
    });
  }
}
