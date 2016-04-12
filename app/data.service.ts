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
  addDispensary() {

  }
  search(term) {

  }
  addStrain() {

  }
  updateStrain() {

  }
  updateDispensary() {

  }
  updateUser() {

  }
}
