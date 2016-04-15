import { Component, EventEmitter } from 'angular2/core';
import { StrainViewMenuComponent } from './strain-view-menu.component';


@Component({
  inputs: ["strains"],
  outputs: ['sortBy'],
  directives:[StrainViewMenuComponent],
  selector: "dispensary-menu",
  templateUrl: "app/templates/dispensary-menu.component.html",
  styleUrls: ['../build/css/all-strain.component.css']
})

export class DispensaryMenuComponent{
  sortBy: EventEmitter<string>;
  constructor() {
    this.sortBy = new EventEmitter();
  }
  sort(sortBy) {
    console.log('sortdispmenu', sortBy);
    this.sortBy.emit(sortBy);
  }
}
