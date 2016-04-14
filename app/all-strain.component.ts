/// <reference path="../resources/jquery/jquery.d.ts" />
/// <reference path="../resources/jquery/jquery.simplemodal.d.ts" />
import { Component, OnInit } from 'angular2/core';
import { StrainViewComponent } from './strain-view.component';
import { DataService } from './data.service';

@Component({
    directives:[StrainViewComponent],
    templateUrl: 'app/templates/all-strain.component.html',
    styleUrls: ['../build/css/all-strain.component.css'],
})
export class AllStrainComponent implements OnInit{
  strains = [];
  maxpage = 0;
  page = 0;
  pages = [];
  pageLinks=[];
  ngOnInit() {
    var self = this;
    $(window).on('scroll', function(e) {
          var _delayTimer;
          clearTimeout(_delayTimer);
          _delayTimer = setTimeout(function () {
              if ($(window).scrollTop() + $(window).height() > $(document).height()-100) {
                if(!self._dataService.isLoading) {
                  self.page++;
                  self._dataService.isLoading = true;
                  self._dataService.getStrains(self.page).subscribe(function(res) {
                    res.strains.forEach(function(strain){
                      self.strains.push(strain);
                      self._dataService.isLoading = false;
                    });
                  });
                }
              }
          }, 100);
        });
  }

  constructor(private _dataService: DataService) {
    this.getStrains();
  }

  getStrains() {
    var self = this;//isolate scope
    this._dataService.getStrains(this.page).subscribe(function(strains){
      self.strains = strains.strains;
      self.maxpage = strains.maxpage;
      console.log(self.strains);
      // self.showPage();
    });
  }
}
