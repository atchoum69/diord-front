import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import 'rxjs/add/operator/toPromise'

import { EditProductComponent } from './edit-product.component';

import { RouterTestingModule } from '@angular/router/testing'

import { ProductService } from '../service/product.service';
import { ProductMockService } from '../service/product-mock.service';

import { AuthenticationService } from '../service/authentication.service';
import { AuthenticationMockService } from '../service/authentication-mock.service';

import { FormsModule } from '@angular/forms';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductComponent ],
      providers: [
          { provide: ProductService, useValue: new ProductMockService() },
          { provide: AuthenticationService, useValue: new AuthenticationMockService() },
          { provide: 'modeMock', useValue: true }
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
