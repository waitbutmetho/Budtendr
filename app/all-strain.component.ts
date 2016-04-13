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
      console.log('maxpage is', self.maxpage);
      self.showPage();
    });
  }
  nextPage() {
    this.incrementPage(1);
  }
  prevPage() {
    this.incrementPage(-1);
  }
  incrementPage(num) {
    this.page = this.page + num;
    if(this.page < 0) this.page = 0;
    if(this.page > this.maxpage) this.page = this.maxpage;
    this.getStrains();
  }

  goToPage(num){
    this.page = num;
    this.getStrains();
  }

  showPage(){
    while(this.count < this.maxpage) {
      this.count = this.count += 1;
      this.pages.push(this.count);//push count into array called pages
      console.log('var pages', this.pages);
    }

  }

}
