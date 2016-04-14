import { Component } from 'angular2/core';
import { DataService } from './data.service';
import { StrainViewComponent } from './strain-view.component';
import { Router } from 'angular2/router';

@Component({
  providers: [DataService],
  directives: [StrainViewComponent],
  templateUrl: 'app/templates/edit-strain.component.html',
})
export class EditStrainComponent{
  strains = [];
  selectedStrain;
  constructor(private _router: Router, private _dataService: DataService){
    if(this._dataService.loggedIn()) {
      var self = this;
      this._dataService.getDispensary(this._dataService.getUser().dispensary_id).subscribe(function(resp) {
        if( resp.status == undefined ) {
          var res = <any>resp;
          self.strains = res.strains;
        } else {
          self._router.navigate(['Index']);
        }
      });
    } else {
      this._router.navigate(['Index']);
      $('#login-overlay').modal('show');
    }
  }
  onSubmit() {
  }
  onSelect(strain) {
    this.selectedStrain = strain;
  }
  onSave() {
    this.selectedStrain = null;
  }
}
