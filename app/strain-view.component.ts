import { Component } from 'angular2/core';

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
}
