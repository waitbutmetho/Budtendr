import { Component } from 'angular2/core';
import { DataService } from './data.service';
import { RouteParams } from 'angular2/router';


@Component({
  providers: [DataService],
    template: `<h1>{{dispensary.name}}</h1>`,

})

export class DispensaryComponent{
  dispensary = [];
  constructor(params: RouteParams, private _dataService: DataService) {
    this.getDispensary(params.get('id'));
  }
  getDispensary(id) {
    this._dataService.getDispensary(id).subscribe(resp => this.dispensary = resp.dispensary);
  }
}
