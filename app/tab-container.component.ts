import {Component} from 'angular2/core'

import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';
import {DispensaryDetailsComponent} from './dispensary-details.component';
import {DispensaryMenuComponent} from './dispensary-menu.component';

@Component({
  inputs: ["strains", "map"],
  selector: 'tab-container',
  template: `
    <tabs>
      <tab [tabName]="'Menu'"><dispensary-menu></dispensary-menu></tab>
      <tab [tabName]="'Details'"><dispensary-details></dispensary-details></tab>
    </tabs>
  `,
  directives: [TabsComponent, TabComponent, DispensaryDetailsComponent, DispensaryMenuComponent]
})
export class TabContainerComponent {

}
