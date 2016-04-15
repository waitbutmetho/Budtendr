import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  templateUrl:"app/templates/index.component.html"
})
export class IndexComponent{
  constructor(private _router: Router) {
  }
  search(values) {
    this._router.navigate(['Search', {term: values.search}]);
  }
}
