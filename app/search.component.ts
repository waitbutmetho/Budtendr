import { Component } from 'angular2/core';
import { DataService } from './data.service';
@Component({
  providers: [DataService],
  template: `Data: {{data}}`,

})

export class SearchComponent{
}
