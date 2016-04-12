import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

var baseURL = "http://nicholasjensenhay.com/budtendrapi/";

@Injectable()
export class DataService {
  constructor(private _http: Http) {

  }
  handleError(error: Response) {
    console.error( error );
    return Observable.throw(error.json().error || "Server Error");
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
