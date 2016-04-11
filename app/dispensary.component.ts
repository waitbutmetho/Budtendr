import { Component } from 'angular2/core';
import { DispensaryViewComponent } from './dispensary-view.component'

@Component({
    template: `
    Dispensary Page
    <dispensary-view></dispensary-view>
    `,
    directives: [DispensaryViewComponent]
})

export class DispensaryComponent{

}
