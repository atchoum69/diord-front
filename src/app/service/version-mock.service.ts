import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise'

import { Version } from '../model/version';
import { VERSIONS } from './mock-versions';
import { VersionService } from './version.service';

@Injectable()
export class VersionMockService extends VersionService {

  constructor() {
    super(null, null);
  }

  getVersions(token: string, idAppli: string): Promise<Version[]> {
    return Promise.resolve(VERSIONS.filter(version => version.idAppli === idAppli));
  }
}
