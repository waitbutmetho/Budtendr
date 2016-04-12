import { Component } from 'angular2/core';

@Component({
  inputs: ['dispensary'],
  selector: "dispensary-view",

    template: `
      <h1><a href="#/dispensary/{{dispensary.id}}">{{dispensary.name}}</a></h1>
    `,


})
export class DispensaryViewComponent{
}
