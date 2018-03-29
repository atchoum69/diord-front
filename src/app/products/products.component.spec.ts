import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import 'rxjs/add/operator/toPromise'

import { ProductsComponent } from './products.component';

import { RouterTestingModule } from '@angular/router/testing'

import { ProductService } from '../service/product.service';
import { ProductMockService } from '../service/product-mock.service';

import { AuthenticationService } from '../service/authentication.service';
import { AuthenticationMockService } from '../service/authentication-mock.service';

describe('ProductComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [
          { provide: ProductService, useValue: new ProductMockService() },
          { provide: AuthenticationService, useValue: new AuthenticationMockService() },
          { provide: 'modeMock', useValue: true }
      ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
