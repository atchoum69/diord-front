import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { VersionService } from './version.service';

describe('VersionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        VersionService,
        { provide: 'urlServiceVersion', useValue: '' }
      ]
    });
  });

  it('should be created', inject([VersionService], (service: VersionService) => {
    expect(service).toBeTruthy();
  }));
});
