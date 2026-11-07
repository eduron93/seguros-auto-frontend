import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface Product {

  id: number;
  name: string;
  description: string;
  conditions: string;
  minPrice: number;
  maxPrice: number;
  rate: number;
  active: boolean;

}


export interface ProductPage {

  content: Product[];

}


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private apiUrl = environment.apiUrl;


  constructor(
    private http: HttpClient
  ) {}


  getProducts(): Observable<ProductPage> {

    return this.http.get<ProductPage>(
      `${this.apiUrl}/products`
    );

  }


}
