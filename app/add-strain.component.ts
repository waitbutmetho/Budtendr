import { Component } from 'angular2/core';
import { DataService } from './data.service';

@Component({
  providers: [DataService],
  templateUrl: 'app/templates/add-strain.component.html',
  styleUrls: ['../build/css/add-strain.component.css'],
})
export class AddStrainComponent{
  constructor(private _dataService: DataService){}
  onSubmit(form) {
    var values=[];
    values.push(63);
    values.push(form['name']);
    values.push(form['thc']);
    values.push(form['cbd']);
    values.push((form['cgc'])? 1:0);
    values.push(form['species']);
    values.push(form['rec_price_gram']);
    values.push(form['rec_price_eighth']);
    values.push(form['rec_price_quarter']);
    values.push(form['rec_price_half']);
    values.push(form['rec_price_ounce']);
    values.push(form['med_price_gram']);
    values.push(form['med_price_eighth']);
    values.push(form['med_price_quarter']);
    values.push(form['med_price_half']);
    values.push(form['med_price_ounce']);
    this._dataService.addStrain(values).subscribe(function(re){
      console.log(re);
    });
  }
}
