import { Component, OnInit, Inject } from '@angular/core';

import { Product } from '../model/product';

import { ProductService } from '../service/product.service';
import { ProductMockService } from '../service/product-mock.service';

import { AuthenticationService } from '../service/authentication.service';
import { AuthenticationMockService } from '../service/authentication-mock.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService,
              private authenticationService: AuthenticationService) {
  }

  getProducts(): void {
    this.authenticationService.login('admin', 'admin').then(response => {
      this.productService.getProducts(this.authenticationService.token).then(products => {
        // console.log(products);
        this.products = products;
      });
    });
  }

  ngOnInit() {
    this.getProducts();
  }

}
