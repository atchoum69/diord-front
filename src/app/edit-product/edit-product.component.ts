import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../model/product';

import { ProductService } from '../service/product.service';
import { ProductMockService } from '../service/product-mock.service';

import { AuthenticationService } from '../service/authentication.service';
import { AuthenticationMockService } from '../service/authentication-mock.service';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;

  modeCreation = false;

  constructor(private productService: ProductService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      // on ne trouve pas le produit, donc on est en mode creation
      this.modeCreation = true;
      this.product = new Product();
    } else {
      this.getProduit(id);
    }
  }

  getProduit(id: number): void {
    this.productService.getProduct(this.authenticationService.token, id)
    .then(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  updateProduct(): void {
    this.productService.updateProduct(this.authenticationService.token,
      this.product);
    this.location.back();
  }

  createProduct(): void {
    this.productService.createProduct(this.authenticationService.token,
      this.product);
    this.location.back();
  }

  private handleError(error: any): Promise<any> {
    console.error('EditProductComponent: An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
