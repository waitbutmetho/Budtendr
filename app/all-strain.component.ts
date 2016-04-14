/// <reference path="../resources/jquery/jquery.d.ts" />
/// <reference path="../resources/jquery/jquery.simplemodal.d.ts" />
import { Component, OnInit } from 'angular2/core';
import { StrainViewComponent } from './strain-view.component';
import { DataService } from './data.service';
import { RouteParams, Router } from 'angular2/router';

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
  sortDir = "asc";
  sortBy = "name";
  ngOnInit() {
    var self = this;
    $(window).on('scroll', function(e) {
          var _delayTimer;
          clearTimeout(_delayTimer);
          _delayTimer = setTimeout(function () {
              if ($(window).scrollTop() + $(window).height() > $(document).height()-100) {
                if(!self._dataService.getIsLoading()) {
                  self.page++;
                  self._dataService.setIsLoading(true);
                  self._dataService.getStrains(self.page).subscribe(function(resp) {
                    if( resp.status == undefined ) {
                      var res = <any>resp;
                      res.strains.forEach(function(strain){
                        self.strains.push(strain);
                        self._dataService.setIsLoading(false);
                      });
                      console.log(resp);
                    } else {
                      self._router.navigate(['Index']);
                    }

                  });
                }
              }
          }, 100);
        });
  }

  constructor(private _dataService: DataService, private _router: Router) {
    this.getStrains();
  }

  getStrains() {
    var self = this;//isolate scope
    this._dataService.getStrains(this.page, this.sortBy, this.sortDir).subscribe(function(resp){
      if( resp.status == undefined ) {
        var strains = <any>resp;
        self.strains = strains.strains;
        self.maxpage = strains.maxpage;
        console.log(resp);
      } else {
        self._router.navigate(['Index']);
      }
    });
  }
  sort(sortby) {
    if(this.sortBy == sortby) {
      if(this.sortDir === "asc") {
        this.sortDir = "desc";
      } else {
        this.sortDir = "asc";
      }
    }
    this.sortBy = sortby;
    this.getStrains();
  }
}
