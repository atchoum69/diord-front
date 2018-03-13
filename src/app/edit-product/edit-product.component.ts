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

  modeCreation: boolean = false;

  constructor(private productService: ProductService,
    private authenticationService: AuthenticationService,
    @Inject("modeMock") private modeBouchon: boolean,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      // on ne trouve pas le produit, donc on est en mode creation
      this.modeCreation = true;
      this.product = new Product();
    } else {
      this.getProduit(id);
    }
  }

  getProduit(id: number): void {
    if (this.modeBouchon) {
      this.productService.getMockProduct(id)
      .then(product => this.product = product);
    } else {
      this.productService.getProduct(this.authenticationService.token, id)
      .then(product => this.product = product);
    }
  }

  goBack(): void {
    this.location.back();
  }

  updateProduct(): void {
    if (this.modeBouchon) {
      this.productService.updateMockProduct(this.product);
    } else {
      this.productService.updateProduct(this.authenticationService.token,
        this.product);
    }
    this.location.back();
  }

  createProduct(): void {
    if (this.modeBouchon) {
      this.productService.createMockProduct(this.product);
    } else {
      this.productService.createProduct(this.authenticationService.token,
        this.product);
    }
    this.location.back();
  }

  private handleError(error: any): Promise<any> {
    console.error('EditProductComponent: An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
