import { Component, OnInit } from 'angular2/core';
import { DispensaryViewComponent } from './dispensary-view.component';
import { DataService } from './data.service';

@Component({
  selector:"all-dispensaries",
    directives:[DispensaryViewComponent],
    template: `
    <div class="jumbotron jumbotron-fluid">
      <div id="disp-banner" class="container">
        <h1 class="display-3">Dispensary List</h1>
        <p class="lead">Browse dispensaries to find your next strain</p>
      </div>
    </div>
    <div class="controls">
      <button class="btn btn-primary btn-md outline"(click)="nextPage()">Next Page</button>
      <button class="btn btn-primary btn-md outline" (click)="prevPage()">Prev Page</button>
    </div>
      <br><br>
      <dispensary-view *ngFor="#dispensary of dispensaries" [dispensary]="dispensary"></dispensary-view>
    `,
    styleUrls: ['../build/css/all-dispensaries.component.css'],

})

export class AllDispensariesComponent implements OnInit{
  dispensaries = [];
  maxpage=0;
  page = 0;
  ngOnInit() {

  }
  constructor(private _dataService: DataService) {
    this.getDispensaries();
  }
  getDispensaries() {
    var self = this;
    this._dataService.getDispensaries(this.page).subscribe(function(dispensaries){
      self.dispensaries = dispensaries.dispensaries;
      self.maxpage = dispensaries.maxpage;
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
    var oldpage = this.page;
    this.page = this.page + num;
    if(this.page < 0) this.page = 0;
    if(this.page > this.maxpage) this.page = this.maxpage;
    if(oldpage !== this.page)
      this.getDispensaries();

  }
}
