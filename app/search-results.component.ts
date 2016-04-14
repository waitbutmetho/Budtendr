import { Component } from 'angular2/core';
import { StrainViewMenuComponent } from './strain-view-menu.component';

@Component({
  selector: 'search-results',
  directives: [StrainViewMenuComponent],
  inputs:['dispensary'],
  templateUrl: "app/templates/search-results.component.html" ,
})
export class SearchResultsComponent{

}
