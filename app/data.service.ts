import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

// var baseURL = 'http://localhost/budtendr/';
var baseURL = "http://nicholasjensenhay.com/budtendrapi/";

var user;
var loggedIn = false;
var isLoading = false;

@Injectable()
export class DataService {
  constructor(private _http: Http) {
  }
  mapHandler(res) {
    var error = false;
    try {
      console.log("MapHandler Trying", res);
      return res.json();
    } catch(e) {
      error = true;
    }
    if(error) {
      console.log("error", res);
    }
    return res;
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
    console.log('post request', baseURL+url, data);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(baseURL+url, data, { headers: headers}).do(data => console.log(data));
  }
  getStrains(page=0, sortby="name", sortdir="asc") {
    var url = baseURL + 'strainlist.php?page='+page+"&sortby="+sortby+"&sortdir="+sortdir;
    console.log(url);
    return this._http.get(url)
      .map(this.mapHandler)
      .do(data => console.log(data));
  }
  getDispensaries(page=0) {
    return this._http.get(baseURL+'dispensarylist.php?page='+page)
      .map(this.mapHandler)
      .do(data => console.log(data));
  }
  getDispensary(id) {
    return this._http.get(baseURL+'dispensary.php?id='+id)
      .map(this.mapHandler)
      .do(data => console.log(data))
  }
  login(user, pass) {
    var self = this;
    var keys = "username password".split(' ');
    var values = [user, pass];
    if(true) {
      return this.postRequest('login.php', this.makeData(keys, values))
        .map(this.mapHandler)
        .do(function(data) {
          self.localLogin(data.user);
          console.log("login resp", data);
        });
    }
  }
  localLogin(newUser) {
    user = newUser;
    loggedIn = true;
  }
  logout() {
    user = '';
    loggedIn = false;
  }
  signUp(values) {
    values.push(0);
    var keys = "username email password dispensary_id".split(' ');
    return this.postRequest('signup.php', this.makeData(keys, values))
      .map(this.mapHandler)
      .do(res => this.localLogin(res.user));
  }
  getIsLoading() {
    return isLoading;
  }
  setIsLoading(bool) {
    isLoading = bool;
  }
  loggedIn() {
    return loggedIn;
  }
  getUser() {
    return user;
  }
  addDispensary(values) {
    console.log("Add Disp", values);
    var keys = "name address city state phone email hours bio icon".split(' ');
    return this.postRequest('adddispensary.php', this.makeData(keys, values));
  }
  editDispensary(values) {
    console.log("Edit Disp", values);
    var keys = "id name address city state phone email hours bio icon".split(' ');
    return this.postRequest('editdispensary.php', this.makeData(keys, values));
  }
  search(term) {

  }
  addStrain(values) {
    var keys = "dispensary_id name thc cbd organic geno rec_price_gram rec_price_eighth rec_price_quarter rec_price_half rec_price_ounce med_price_gram med_price_eighth med_price_quarter med_price_half med_price_ounce".split(' ');
    return this.postRequest('addstrain.php', this.makeData(keys, values));
  }
  updateStrain() {

  }
  updateDispensary() {

  }
  updateUser() {

  }
  getStrainsForDispensary() {

  }
}
