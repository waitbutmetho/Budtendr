import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { DataService } from './data.service';
import { SearchResultsComponent } from './search-results.component';

@Component({
  providers: [DataService],
  directives: [SearchResultsComponent],
  template: `
    <search-results *ngFor="#dispensary of results" [dispensary]="dispensary"></search-results>
  `,
})
export class SearchComponent{
  results = [];
  constructor(params: RouteParams, private _dataService: DataService) {
    console.log("Search", params.get('term'));
    var self = this;
    this._dataService.search(params.get('term')).subscribe(function(res) {
      console.log(res);
      self.results = res;
    });
  }
}
