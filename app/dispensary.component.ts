import { Component } from 'angular2/core';
import { DataService } from './data.service';
import { RouteParams, Router } from 'angular2/router';
import { TabContainerComponent } from './tab-container.component';

@Component({
  directives: [TabContainerComponent],
  providers: [DataService],
  templateUrl: 'app/templates/dispensary.component.html',
    styleUrls: ['../build/css/dispensary.component.css'],
})
export class DispensaryComponent{
  dispensary = [];
  strains = [];
  map = "";
  constructor(private _router: Router, params: RouteParams, private _dataService: DataService) {
    this.getDispensary(params.get('id'));
  }
  getDispensary(id) {
    this._dataService.getDispensary(id).subscribe(resp => {
      if( resp.status == undefined ) {
        var res = <any>resp;
        this.dispensary = res.dispensary;
        this.strains = res.strains;
        this.map = res.mapslink;
        console.log(resp);
      } else {
        this._router.navigate(['Index']);
      }
    });
  }

  sortBy = '';
  sortDir = 'asc';
  sort(sortBy) {
    console.log('dispsort', sortBy);
    if(sortBy === this.sortBy) {
      this.flipSortDir();
    }
    this.sortBy = sortBy;
    var self = this;
    var dispensary = <any>this.dispensary;
    this._dataService.getStrainsForDispensary(dispensary.id, this.sortBy, this.sortDir).subscribe(function(res) {
      self.strains = res.strains;
    });
  }
  flipSortDir() {
    var dir = this.sortDir;
    if(dir == "asc") {
      dir = "desc";
    } else {
      dir = "asc";
    }
    this.sortDir = dir;
  }

}
