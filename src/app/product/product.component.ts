import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';

import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
