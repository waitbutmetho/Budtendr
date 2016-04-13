import {Component} from 'angular2/core'

import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';

@Component({
  selector: 'tab-container',
  template: `
  <tabs>
        <tab [tabName]="'Menu'">Menu Component</tab>
        <tab [tabName]="'Updates'">Updates Component</tab>
        <tab [tabName]="'Details'">Details Component</tab>
        <tab [tabName]="'Reviews'">Reviews Component</tab>
      </tabs>
  `,
  directives: [TabsComponent, TabComponent]
})
export class TabContainerComponent {

}
