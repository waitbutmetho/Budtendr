import { Component } from 'angular2/core';
import { DataService } from "./data.service";


@Component({
  providers: [DataService],
  templateUrl:"app/templates/index.component.html"

})

export class IndexComponent{
  constructor(private _dataService: DataService) {
    
  }
}
