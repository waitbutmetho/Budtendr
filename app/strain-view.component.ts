import { Component, EventEmitter } from 'angular2/core';

@Component({
  inputs: ['strain'],
  selector: "strain-view",
  templateUrl: 'app/templates/strain-view.component.html',
  styleUrls: ['../build/css/strain-view.component.css'],
})
export class StrainViewComponent{
  emitter: EventEmitter<Object>;
  constructor() {
    this.emitter = new EventEmitter<Object>();
  }
  action(data) {
    console.log(data);
  }
  onSelect(strain) {
    this.emitter.emit(strain);
  }
}
