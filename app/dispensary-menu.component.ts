import { Component } from 'angular2/core';
import { StrainViewMenuComponent } from './strain-view-menu.component';
import { DataService } from './data.service';
import { RouteParams, Router } from 'angular2/router';


@Component({
  inputs: ["strains"],
  directives:[StrainViewMenuComponent],
  selector: "dispensary-menu",
  templateUrl: "app/templates/dispensary-menu.component.html",
})

export class DispensaryMenuComponent{
  sort() {
    
  }

}
