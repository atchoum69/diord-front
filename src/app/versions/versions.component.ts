import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Version } from '../model/version';

import { VersionService } from '../service/version.service';
import { VersionMockService } from '../service/version-mock.service';
import { AuthenticationService } from '../service/authentication.service';
import { AuthenticationMockService } from '../service/authentication-mock.service';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent implements OnInit {

  versions: Version[];
  idAppli: string;

  constructor(private versionService: VersionService,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute) {
    }

  getVersions(idAppli: string): void {
    this.authenticationService.login('admin', 'admin').then(response => {
      this.versionService.getVersions(this.authenticationService.token, idAppli).then(versions => {
        // console.log(products);
        this.versions = versions;
      });
    });
  }

  ngOnInit() {
    this.idAppli = this.route.snapshot.paramMap.get('idAppli');
    this.getVersions(this.idAppli);
  }

}
