import { Injectable, Inject } from '@angular/core';

import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise'

import { Version } from '../model/version';

@Injectable()
export class VersionService {

  constructor(private http: Http, @Inject('urlServiceVersion') private urlService: string) { }

  getVersions(token: string, idAppli: string): Promise<Version[]> {
    const url = this.urlService + '/' + idAppli;
    // console.log('getVersions : ' + url);

    const headers = new Headers({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    const options = new RequestOptions({
      headers: headers,
      body: '',
      method: RequestMethod.Get,
      url: url
    });

    return this.http.get(url, options)
      .toPromise()
      .then(response => {
        // console.log(response.json());
        return Promise.resolve(response.json() as Version[])
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('VersionService: An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
