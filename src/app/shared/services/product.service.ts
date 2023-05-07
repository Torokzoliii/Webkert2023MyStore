import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    private afs: AngularFirestore,   
    ) { }

  loadProducts() : Observable<Array<Product>> {
    console.log("itt vagyunk");
    return this.afs.collection<Product>('Products').valueChanges();
  }
}
