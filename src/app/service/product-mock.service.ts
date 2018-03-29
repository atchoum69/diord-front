import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise'

import { Product } from '../model/product';
import { PRODUCTS } from './mock-products';
import { ProductService } from './product.service';

@Injectable()
export class ProductMockService extends ProductService {

  constructor() {
    super(null, null);
  }

  getProducts(token: string): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getProduct(token: string, id: number): Promise<Product> {
    return Promise.resolve(PRODUCTS.find(product => product.id === id));
  }

  updateProduct(token: string, product: Product): Promise<Product> {
    const searchIndex = PRODUCTS.findIndex(curProduct => curProduct.id === product.id);
    if (searchIndex > -1) {
      PRODUCTS.splice(searchIndex, 1, product);
    }
    return Promise.resolve(product);
  }

  createProduct(token: string, product: Product): Promise<Product> {
    let max: number = -1;
    PRODUCTS.forEach(element => {
      if (element.id > max) {
        max = element.id;
      }
    });
    product.id = max + 1;
    PRODUCTS.push(product);
    return Promise.resolve(product);
  }
}
