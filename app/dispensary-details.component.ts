import { Component } from 'angular2/core';
import { DataService } from './data.service';
import { RouteParams, Router } from 'angular2/router';


@Component({
  inputs: ["map"],
  selector: "dispensary-details",
  template: `
      <div class="iframe"><iframe
        frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA8oOMtbttD_D0-jZIgRwgCc-sthNgdCOA
          &q={{map}}" allowfullscreen>
      </iframe></div>`,
})

export class DispensaryDetailsComponent{

}
