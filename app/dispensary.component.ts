import { Component } from 'angular2/core';
import { DataService } from './data.service';
import { RouteParams } from 'angular2/router';


@Component({
  providers: [DataService],
  templateUrl: 'app/templates/dispensary.component.html',
    styleUrls: ['../build/css/dispensary.component.css'],
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
