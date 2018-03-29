import { Injectable, Inject } from '@angular/core';

import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise'

import { Product } from '../model/product';

@Injectable()
export class ProductService {

  constructor(private http: Http, @Inject('urlServiceAppli') private urlService: string) { }

  getProducts(token: string): Promise<Product[]> {
    // console.log('getProducts : ' + this.urlService);

    const headers = new Headers({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    const options = new RequestOptions({
      headers: headers,
      body: '',
      method: RequestMethod.Get,
      url: this.urlService
    });

    return this.http.get(this.urlService, options)
      .toPromise()
      .then(response => {
        // console.log(response.json());
        return Promise.resolve(response.json() as Product[])
      })
      .catch(this.handleError);
  }

  getProduct(token: string, id: number): Promise<Product> {
    const url = this.urlService + '/' + id;
    // console.log('getProduct : ' + url);

    const headers = new Headers({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    const options = new RequestOptions({
      headers: headers,
      body: '',
      method: RequestMethod.Get,
      url: url
    });

    return this.http.get(url, options)
      .toPromise()
      .then(response => {
        // console.log(response.json());
        return Promise.resolve(response.json() as Product)
      })
      .catch(this.handleError);
  }

  updateProduct(token: string, product: Product): Promise<Product> {
    // console.log('updateProduct : ' + this.urlService);

    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    const body = JSON.stringify(product);

    const options = new RequestOptions({
      headers: headers,
      body: body,
      method: RequestMethod.Put,
      url: this.urlService
    });

    return this.http.put(this.urlService, body, options)
      .toPromise()
      .then(response => {
        // console.log(response.json());
        return Promise.resolve(response.json() as Product)
      })
      .catch(this.handleError);
  }

  createProduct(token: string, product: Product): Promise<Product> {
    // console.log('createProduct : ' + this.urlService);

    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    const body = JSON.stringify(product);

    const options = new RequestOptions({
      headers: headers,
      body: body,
      method: RequestMethod.Post,
      url: this.urlService
    });

    return this.http.post(this.urlService, body, options)
      .toPromise()
      .then(response => {
        // console.log(response.json());
        return Promise.resolve(response.json() as Product)
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('ProductService: An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
