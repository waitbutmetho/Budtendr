import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

var baseURL = "http://localhost/budtendr/";

@Injectable()
export class DataService {
  constructor(private _http: Http) {

  }
  getData() {
    return this._http.get(baseURL + 'request.php')
      .map(res => res.json());
  }
  handleError(error: Response) {
    console.error( error );
    return Observable.throw(error.json().error || "Server Error");
  }
  getStrains() {
    return this._http.get(baseURL + 'strainlist.php')
      .map(res => res.json());
  }
}
