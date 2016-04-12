import { Component } from 'angular2/core';


@Component({
    templateUrl: 'app/templates/add-dispensary.component.html',

})

export class AddDispensaryComponent{
  onSubmit(values) {
    console.log(values)
  }
}
