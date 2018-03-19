import { Component, OnInit, Inject } from '@angular/core';

import { Product } from '../model/product';

import { ProductService } from '../service/product.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService,
    private authenticationService: AuthenticationService,
    @Inject('modeMock') private modeBouchon: boolean) { }

  getProducts(): void {
    if (this.modeBouchon) {
      this.productService.getMockProducts().then(products => this.products = products);
    } else {
      this.authenticationService.login('admin', 'admin').then(response => {
        this.productService.getProducts(this.authenticationService.token).then(products => {
          // console.log(products);
          this.products = products
        });
      });
    }
  }

  ngOnInit() {
    this.getProducts();
  }

}
