import { Component } from 'angular2/core';

@Component({
  inputs: ['dispensary'],
  selector: "dispensary-view",
    template: `
      <h1>{{dispensary.name}}</h1>
    `,

})
export class DispensaryViewComponent{
}
