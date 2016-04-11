import { Component } from 'angular2/core';

@Component({
  inputs: ['strain'],
  selector: "strain-view",
    template: `
      <h1>{{strain.name}}</h1>
    `,

})
export class StrainViewComponent{
}
