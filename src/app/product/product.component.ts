import { Component, OnInit, Inject } from '@angular/core';

import { Product } from '../model/product';

import { ProductService } from '../service/product.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService,
    private authenticationService: AuthenticationService,
    @Inject("modeMock") private modeBouchon: boolean) { }

  getProducts(): void {
    if (this.modeBouchon) {
      this.productService.getMockProducts().then(products => this.products = products);
    } else {
      this.authenticationService.login('admin', 'admin').then(response => {
        this.productService.getProducts(this.authenticationService.token).then(products => {
          //console.log(products);
          this.products = products
        });
      });
    }
  }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
