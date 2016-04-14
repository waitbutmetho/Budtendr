import { Component, OnInit } from 'angular2/core';
import { StrainViewComponent } from './strain-view.component';
import { DataService } from './data.service';

@Component({
    directives:[StrainViewComponent],
    templateUrl: 'app/templates/all-strain.component.html',
    styleUrls: ['../build/css/all-strain.component.css'],


})

export class AllStrainComponent implements OnInit{
  strains = [];
  maxpage = 0;
  page = 0;
  count= -1;
  pages = [];
  ngOnInit() {

  }

  constructor(private _dataService: DataService) {
    this.getStrains();
  }

  getStrains() {
    var self = this;//isolate scope
    this._dataService.getStrains(this.page).subscribe(function(strains){
      self.strains = strains.strains;
      self.maxpage = strains.maxpage;
      console.log(self.strains);
      // self.showPage();
    });
  }
}
