import { Component } from 'angular2/core';

@Component({
  selector: 'nav-bar',
  template: `
    <div class="nav-bar">
    <div class="logo">Logo</div>
    <div class="nav-bar-nav">
      <ul>
        <li><a [routerLink]="['AppComponent']">Index</a></li>
        <li><a [routerLink]="['StrainList']">Strains</a></li>
      </ul>
    </div>
  `
})
export class NavBarComponent {

}
