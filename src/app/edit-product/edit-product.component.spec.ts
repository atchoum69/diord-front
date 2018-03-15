import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import 'rxjs/add/operator/toPromise'

import { EditProductComponent } from './edit-product.component';

import { RouterTestingModule } from '@angular/router/testing'

import { ProductService } from '../service/product.service';
import { AuthenticationService } from '../service/authentication.service';

import { Product } from '../model/product';
import { PRODUCTS } from '../service/mock-products';

export class MockProductService {

  getMockProduct(id: number): Promise<Product> {
    return Promise.resolve(PRODUCTS.find(product => product.id === id));
  }

  getProduct(token: string, id: number): Promise<Product> {
    return Promise.resolve(PRODUCTS.find(product => product.id === id));
  }
}

export class MockAuthService {

}

import { FormsModule } from '@angular/forms';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let mockProductService: MockProductService;
  let mockAuthService: MockAuthService;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductComponent ],
      providers: [
          { provide: ProductService, useValue: mockProductService },
          { provide: AuthenticationService, useValue: mockAuthService },
          { provide: "modeMock", useValue: true }
      ],
      imports: [ FormsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
