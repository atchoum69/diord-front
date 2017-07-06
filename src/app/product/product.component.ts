import { Component, OnInit } from '@angular/core';

export class Product {
  id: number;
  description: string;
  bigramme: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [
    { id: 1, description: 'Cristal EXN', bigramme: 'CR' },
    { id: 2, description: 'Corali', bigramme: 'OR' },
    { id: 3, description: 'SIAS', bigramme: 'SI' },
    { id: 3, description: 'GSFF', bigramme: 'GF' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
