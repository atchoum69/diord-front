import { Injectable, Inject } from '@angular/core';


import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationMockService extends AuthenticationService {
  public token: string;

  constructor() {
    super(null, null);
  }

  login(username: string, password: string): Promise<boolean> {
    this.token = username + '||' + password;
    return Promise.resolve(true);
  }

  logout(): void {
    this.token = null;
  }
}
