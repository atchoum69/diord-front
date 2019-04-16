import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';


import { Product } from '../model/product';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient, @Inject('urlServiceAppli') private urlService: string) { }

  getProducts(token: string): Promise<Product[]> {
    // console.log('getProducts : ' + this.urlService);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token);

    return this.http.get<Product[]>(this.urlService, {headers})
      .toPromise()
      .then(response => {
        // console.log(response.json());
        return Promise.resolve(response);
      })
      .catch(this.handleError);
  }

  getProduct(token: string, id: number): Promise<Product> {
    const url = this.urlService + '/' + id;
    // console.log('getProduct : ' + url);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token);

    return this.http.get<Product>(url, {headers})
      .toPromise()
      .then(response => {
        // console.log(response.json());
        return Promise.resolve(response);
      })
      .catch(this.handleError);
  }

  updateProduct(token: string, product: Product): Promise<Product> {
    // console.log('updateProduct : ' + this.urlService);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);

    const body = JSON.stringify(product);

    return this.http.put<Product>(this.urlService, body, {headers})
      .toPromise()
      .then(response => {
        // console.log(response.json());
        return Promise.resolve(response);
      })
      .catch(this.handleError);
  }

  createProduct(token: string, product: Product): Promise<Product> {
    // console.log('createProduct : ' + this.urlService);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);

    const body = JSON.stringify(product);

    return this.http.post<Product>(this.urlService, body, {headers})
      .toPromise()
      .then(response => {
        // console.log(response.json());
        return Promise.resolve(response);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('ProductService: An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
