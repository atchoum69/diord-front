import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing'

import { VersionsComponent } from './versions.component';

import { VersionService } from '../service/version.service';
import { VersionMockService } from '../service/version-mock.service';
import { AuthenticationService } from '../service/authentication.service';
import { AuthenticationMockService } from '../service/authentication-mock.service';

describe('VersionsComponent', () => {
  let component: VersionsComponent;
  let fixture: ComponentFixture<VersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionsComponent ],
      providers: [
          { provide: VersionService, useValue: new VersionMockService() },
          { provide: AuthenticationService, useValue: new AuthenticationMockService() },
          { provide: 'modeMock', useValue: true }
      ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
