import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { DataService } from './data.service';


@Component({
  inputs: ['strain'],
  selector: "strain-view",
  templateUrl: 'app/templates/strain-view.component.html',
    styleUrls: ['../build/css/strain-view.component.css'],
})
export class StrainViewComponent{
  action(data) {
    console.log(data);
  }
  constructor(private _router: Router, private _dataService: DataService){
  }

  onNavigate(){
    this._router.navigate(['dispensary/:dispensary_id']);
  }
}
