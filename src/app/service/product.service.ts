import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise'

import { Product } from '../model/product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {

  // TODO : configurer l'url du service
  //protected basePath = 'http://localhost:8080/diordapplimiddle/api';
  protected basePath = 'http://localhost:8081/api';

  constructor(private http: Http) { }

  getMockProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getProducts(token: string): Promise<Product[]> {
    const path = this.basePath + '/produits';

    console.log('getProducts : ' + path);

    let headers = new Headers({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let options = new RequestOptions({
      headers: headers,
      body: '',
      method: RequestMethod.Get,
      url: path
    });

    return this.http.get(path, options)
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
