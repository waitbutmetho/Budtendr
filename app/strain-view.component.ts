  import { Component, EventEmitter } from 'angular2/core';
  import { Router } from 'angular2/router';
  import { DataService } from './data.service';

  @Component({
    inputs: ['strain'],
    selector: "strain-view",
    templateUrl: 'app/templates/strain-view.component.html',
    styleUrls: ['../build/css/strain-view.component.css'],
  })
  export class StrainViewComponent{
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
