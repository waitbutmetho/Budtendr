import { Component, OnInit } from 'angular2/core';
import { StrainViewComponent } from './strain-view.component';
import { DataService } from './data.service';

@Component({
    directives:[StrainViewComponent],
    templateUrl: 'app/templates/all-strain.component.html',


})

export class AllStrainComponent implements OnInit{
  strains = [];
  maxpage=0;
  page = 0;
  ngOnInit() {

  }
  constructor(private _dataService: DataService) {
    this.getStrains();
  }
  getStrains() {
    var self = this;
    this._dataService.getStrains(this.page).subscribe(function(strains){
      self.strains = strains.strains;
      self.maxpage = strains.maxpage;
      console.log(self.maxpage);
    });
  }
  nextPage() {
    this.setPage(1);
  }
  prevPage() {
    this.setPage(-1);
  }
  setPage(num) {
    this.page = this.page + num;
    if(this.page < 0) this.page = 0;
    if(this.page > this.maxpage) this.page = this.maxpage;
    this.getStrains();

  }
}
