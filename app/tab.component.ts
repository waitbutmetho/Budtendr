import { Component, Input } from 'angular2/core';

@Component({
  selector: 'tab',

  template: `
    <div [hidden]="!active" class="tab-content">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input('tabName') title: string;
  @Input() active = false;
}
