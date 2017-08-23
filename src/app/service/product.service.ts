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

  private handleError(error: any): Promise<any> {
    console.error('ProductService: An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
