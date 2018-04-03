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

  it('should have getProduct function', () => {
    expect(component.getProduit).toBeTruthy();
  });

  it('should have createProduct function', () => {
    expect(component.createProduct).toBeTruthy();
  });

  it('should have updateProduct function', () => {
    expect(component.updateProduct).toBeTruthy();
  });

  it('should return product', () => {
    fixture.detectChanges();

    // Call method
    component.getProduit(4);

    // Asynchrone return
    fixture.whenStable().then(() => {
      // Assert
      fixture.detectChanges();

      expect(component.product).toBeTruthy();
      expect(component.product.id).toEqual(4);
      expect(component.product.idAppli).toBe('CRI');
      expect(component.product.name).toBe('cri');
      expect(component.product.description).toBe('Documents Dialogue pour CRISTAL');
      expect(component.product.codePaquet).toBe('cr');
    });
  });

  xit('should return product on ngInit', () => {
    fixture.detectChanges();

    // Call method
    component.ngOnInit();

    // Asynchrone return
    fixture.whenStable().then(() => {
      // Assert
      fixture.detectChanges();

      expect(component.product).toBeTruthy();
      expect(component.product.id).toEqual(4);
      expect(component.product.idAppli).toBe('CRI');
      expect(component.product.name).toBe('cri');
      expect(component.product.description).toBe('Documents Dialogue pour CRISTAL');
      expect(component.product.codePaquet).toBe('cr');
    });
  });
});
