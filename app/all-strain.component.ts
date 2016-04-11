import { Component, OnInit } from 'angular2/core';
import { StrainViewComponent } from './strain-view.component';
import { DataService } from './data.service';

@Component({
    directives:[StrainViewComponent],
    template: `
      <h1>Strains:</h1>
      <button (click)="nextPage()">Next Page</button><button (click)="prevPage()">Prev Page</button>
      <strain-view *ngFor="#strain of strains" [strain]="strain">

      </strain-view>
    `,

})

export class AllStrainComponent implements OnInit{
  strains = [];
  page = 0;
  ngOnInit() {

  }
  constructor(private _dataService: DataService) {
    this.getStrains();
  }
  getStrains() {
    var self = this;
    this._dataService.getStrains(this.page).subscribe(strains => self.strains = strains.strains);
  }
  nextPage() {
    this.setPage(1);
  }
  prevPage() {
    this.setPage(-1);
  }
  setPage(num) {
    this.page = this.page + num;
    this.getStrains();

  }
}
