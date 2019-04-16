import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Version } from '../model/version';

@Injectable()
export class VersionService {

  constructor(private http: HttpClient, @Inject('urlServiceVersion') private urlService: string) { }

  getVersions(token: string, idAppli: string): Promise<Version[]> {
    const url = this.urlService + '/' + idAppli;
    // console.log('getVersions : ' + url);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token);

    return this.http.get<Version[]>(url, {headers})
      .toPromise()
      .then(response => {
        // console.log(response.json());
        return Promise.resolve(response);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('VersionService: An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
