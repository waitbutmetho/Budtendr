import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

var baseURL = 'http://localhost/budtendr/';
// var baseURL = "http://nicholasjensenhay.com/budtendrapi/";

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
      res = res.json();
      if(!res.error) {
        return res;
      } else {
        console.log(res.errormsg);
      }

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
  getDispensaries() {
    return this._http.get(baseURL+'dispensarylist.php?page=0')
      .map(this.mapHandler)
      .do(data => console.log(data));
  }
  getDispensary(id) {
    return this._http.get(baseURL+'dispensary.php?id='+id)
      .map(this.mapHandler)
      .do(data => console.log(data))
  }
  getIsLoading() {
    return isLoading;
  }
  setIsLoading(bool) {
    isLoading = bool;
  }
  addDispensary(values) {
    console.log("Add Disp", values);
    var keys = "name address city state phone email hours bio icon".split(' ');
    return this.postRequest('adddispensary.php', this.makeData(keys, values));
  }
  search(term) {
    return this._http.get(baseURL+'search.php?search='+term)
      .map(this.mapHandler)
      .do(res => console.log("searchdo", res));
  }
  addStrain(values) {
    var keys = "dispensary_id name thc cbd organic geno rec_price_gram rec_price_eighth rec_price_quarter rec_price_half rec_price_ounce med_price_gram med_price_eighth med_price_quarter med_price_half med_price_ounce".split(' ');
    return this.postRequest('addstrain.php', this.makeData(keys, values));
  }
  getStrainsForDispensary(id, sortby, sortdir) {
    console.log("getstraindisp", id, sortby, sortdir);
    return this._http.get(baseURL+'getstrainsbydispensary.php?id='+id+'&sortby='+sortby+'&sortdir='+sortdir)
      .map(this.mapHandler)
      .do(res => console.log(res));
  }
}
