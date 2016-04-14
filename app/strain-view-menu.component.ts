import { Component, EventEmitter } from 'angular2/core';
import { Router } from 'angular2/router';
import { DataService } from './data.service';

@Component({
  inputs: ['strain'],
  selector: "strain-view-menu",
  templateUrl: 'app/templates/strain-view-menu.component.html',
  styleUrls: ['../build/css/strain-view.component.css'],
})
export class StrainViewMenuComponent{
  emitter: EventEmitter<Object>;
  constructor(private _router: Router, private _dataService: DataService) {
    this.emitter = new EventEmitter<Object>();
  }
  action(data) {
    console.log(data);
  }
  onSelect(strain) {
    this.emitter.emit(strain);
  }
  onNavigate(){
    this._router.navigate(['dispensary/:dispensary_id']);
  }
}
