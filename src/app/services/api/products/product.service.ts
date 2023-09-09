import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllProductsWithLimit(limit: number = 5): Observable<any> {
    const produvctsUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(produvctsUrl);
  }

  createProduct(
    product: ProductRepresentation
  ): Observable<ProductRepresentation> {
    const produvctsUrl: string = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(produvctsUrl, product);
  }
}
