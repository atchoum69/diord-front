import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';



@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http, @Inject('urlServiceAuthentification') private authenticateUrl: string) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Promise<boolean> {
    // console.log("authenticate:login");

    const body = JSON.stringify({ username: username, password: password });
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({
      headers: headers,
      body: body,
      method: RequestMethod.Post,
      url: this.authenticateUrl
    });

    return this.http.post(this.authenticateUrl, body, options)
      .toPromise()
      .then(response => {
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().id_token;
        // console.log("authenticate:ok " + token);
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // console.log("authenticate:ko " + token);
          // return false to indicate failed login
          return false;
        }
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('AuthenticationService: An error occurred', error);
    return Promise.reject(error.message || error);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
