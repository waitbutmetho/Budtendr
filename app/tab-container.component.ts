import {Component} from 'angular2/core'

import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';
import {DispensaryDetailsComponent} from './dispensary-details.component';
import {DispensaryMenuComponent} from './dispensary-menu.component';
import {DispensaryReviewsComponent} from './dispensary-reviews.component';
import {DispensaryUpdatesComponent} from './dispensary-updates.component';

@Component({
  selector: 'tab-container',
  template: `
  <tabs>
        <tab [tabName]="'Menu'"><dispensary-menu></dispensary-menu></tab>
        <tab [tabName]="'Updates'"><dispensary-updates></dispensary-updates></tab>
        <tab [tabName]="'Details'"><dispensary-details></dispensary-details></tab>
        <tab [tabName]="'Reviews'"><dispensary-reviews></dispensary-reviews></tab>
      </tabs>
  `,
  directives: [TabsComponent, TabComponent, DispensaryDetailsComponent, DispensaryMenuComponent, DispensaryReviewsComponent, DispensaryUpdatesComponent]
})
export class TabContainerComponent {

}
