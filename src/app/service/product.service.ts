import { Injectable, Inject } from '@angular/core';

import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise'

import { Product } from '../model/product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {

  constructor(private http: Http, @Inject("urlServiceAppli") private urlService: string) { }

  getMockProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getProducts(token: string): Promise<Product[]> {
    console.log('getProducts : ' + this.urlService);

    let headers = new Headers({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let options = new RequestOptions({
      headers: headers,
      body: '',
      method: RequestMethod.Get,
      url: this.urlService
    });

    return this.http.get(this.urlService, options)
      .toPromise()
      .then(response => {
        //console.log(response.json());
        return Promise.resolve(response.json() as Product[])
      })
      .catch(this.handleError);
  }

  getMockProduct(id: number): Promise<Product> {
    return Promise.resolve(PRODUCTS.find(product => product.id === id));
  }

  getProduct(token: string, id: number): Promise<Product> {
    let url = this.urlService + '/' + id;
    console.log('getProduct : ' + url);

    let headers = new Headers({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let options = new RequestOptions({
      headers: headers,
      body: '',
      method: RequestMethod.Get,
      url: url
    });

    return this.http.get(url, options)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return Promise.resolve(response.json() as Product)
      })
      .catch(this.handleError);
  }

  updateMockProduct(product: Product): void {
    let searchIndex = PRODUCTS.findIndex(curProduct => curProduct.id === product.id);
    if (searchIndex > -1) {
      PRODUCTS.splice(searchIndex, 1, product);
    }
  }

  updateProduct(token: string, product: Product): Promise<Product> {
    console.log('updateProduct : ' + this.urlService);

    let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let body = JSON.stringify(product);

    let options = new RequestOptions({
      headers: headers,
      body: body,
      method: RequestMethod.Put,
      url: this.urlService
    });

    return this.http.put(this.urlService, body, options)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return Promise.resolve(response.json() as Product)
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('ProductService: An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
