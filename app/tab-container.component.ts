import {Component, EventEmitter} from 'angular2/core'

import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';
import {DispensaryDetailsComponent} from './dispensary-details.component';
import {DispensaryMenuComponent} from './dispensary-menu.component';

@Component({
  inputs: ["strains", "map"],
  outputs: ['sortBy'],
  selector: 'tab-container',
  template: `
    <tabs>
      <tab [tabName]="'Menu'"><dispensary-menu (sortBy)="sort($event)" [strains]="strains"></dispensary-menu></tab>
      <tab [tabName]="'Map'"><dispensary-details [map]="map"></dispensary-details></tab>
    </tabs>
  `,
  directives: [TabsComponent, TabComponent, DispensaryDetailsComponent, DispensaryMenuComponent]
})
export class TabContainerComponent {
  sortBy: EventEmitter<string>;
  constructor() {
    this.sortBy = new EventEmitter();
  }
  sort(sortBy) {
    console.log('tabcon', sortBy);
    this.sortBy.emit(sortBy);
  }
}
