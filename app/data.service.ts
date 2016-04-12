import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

var baseURL = 'http://localhost/budtendr/';
// var baseURL = "http://nicholasjensenhay.com/budtendrapi/";

@Injectable()
export class DataService {
  constructor(private _http: Http) {

  }
  handleError(error: Response) {
    console.error( error );
    return Observable.throw(error.json().error || "Server Error");
  }
  makeData(keys, values) {
    var output = "";
    if(keys.length === values.length) {
      keys.forEach(function(key, index) {
        output += key+"="+values[index]+"&";
      });
      output = output.substr(0, output.length-1);
    }
    return output;
  }
  postRequest(url, data) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(baseURL+url, data, { headers: headers}).map(res => res.json());
  }
  getStrains(page=0) {
    return this._http.get(baseURL + 'strainlist.php?page='+page)
      .map(res => res.json())
      .do(data => console.log(data));
  }
  getDispensaries(page=0) {
    return this._http.get(baseURL+'dispensarylist.php?page='+page)
      .map(res => res.json())
      .do(data => console.log(data));
  }
  getDispensary(id) {
    return this._http.get(baseURL+'dispensary.php?id='+id)
      .map(res => res.json())
      .do(data => console.log(data));
  }
  login(user, pass) {

  }
  signUp(user, email, pass) {

  }
  addDispensary(name, address, city, state, phone, email, hours, bio, icon) {

  }
  search(term) {

  }
  addStrain(dispensary_id, name, thc, cbd, organic, geno, rec_price_gram=999, rec_price_eighth=999, rec_price_quarter=999, description=999, rec_price_half=999, rec_price_ounce=999, med_price_gram=999, med_price_eighth=999, med_price_quarter=999, med_price_half=999, med_price_ounce=999) {
    var values = [];
    values.push(dispensary_id);
    values.push(name);
    values.push(thc);
    values.push(cbd);
    values.push(organic);
    values.push(geno);
    values.push(rec_price_gram);
    values.push(rec_price_eighth);
    values.push(rec_price_quarter);
    values.push(description);
    values.push(rec_price_half);
    values.push(rec_price_ounce);
    values.push(med_price_gram);
    values.push(med_price_eighth);
    values.push(med_price_quarter);
    values.push(med_price_half);
    values.push(med_price_ounce);

}
  updateStrain() {

  }
  updateDispensary() {

  }
  updateUser() {

  }
}
