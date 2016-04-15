import { Component } from 'angular2/core';
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
      <br><br>
      <dispensary-view *ngFor="#dispensary of dispensaries" [dispensary]="dispensary"></dispensary-view>
    `,
    styleUrls: ['../build/css/all-dispensaries.component.css'],

})

export class AllDispensariesComponent{
  dispensaries = [];
  constructor(private _dataService: DataService) {
    this.getDispensaries();
  }
  getDispensaries() {
    var self = this;
    this._dataService.getDispensaries().subscribe(function(dispensaries){
      self.dispensaries = dispensaries.dispensaries;
    });
  }
}
