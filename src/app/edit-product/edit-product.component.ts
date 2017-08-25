import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Product } from '../model/product';

import { ProductService } from '../service/product.service';
import { AuthenticationService } from '../service/authentication.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
    private authenticationService: AuthenticationService,
    @Inject("modeMock") private modeBouchon: boolean,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
      if (this.modeBouchon) {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.productService.getMockProduct(+params.get('id')))
          .subscribe(product => this.product = product);
      } else {
        // TODO : a implementer
      }
  }

  goBack(): void {
    this.location.back();
  }

  private handleError(error: any): Promise<any> {
    console.error('EditProductComponent: An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
