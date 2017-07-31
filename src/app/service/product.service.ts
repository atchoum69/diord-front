import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
}
