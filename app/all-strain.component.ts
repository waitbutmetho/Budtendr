import { Component, OnInit } from 'angular2/core';
import { StrainViewComponent } from './strain-view.component';

@Component({
    directives:[StrainViewComponent],
    template: `
      <h1>Strains:</h1>
      <strain-view *ngFor="#strain of strains" [strain]="currentStrain">

      </strain-view>
    `,

})

export class AllStrainComponent implements OnInit{
  ngOnInit() {
    this.strains = [1,2,3,4];
  }
  strains = [];

}
