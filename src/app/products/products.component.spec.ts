import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import 'rxjs/add/operator/toPromise'

import { ProductsComponent } from './products.component';

import { RouterTestingModule } from '@angular/router/testing'

import { ProductService } from '../service/product.service';
import { AuthenticationService } from '../service/authentication.service';

import { Product } from '../model/product';
import { PRODUCTS } from '../service/mock-products';

export class MockProductService {

  getMockProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getProducts(token: string): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
}

export class MockAuthService {

}

describe('ProductComponent', () => {
  let component: ProductsComponent;
  const mockProductService: MockProductService = new MockProductService();
  const mockAuthService: MockAuthService = new MockAuthService();
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [
          { provide: ProductService, useValue: mockProductService },
          { provide: AuthenticationService, useValue: mockAuthService },
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
