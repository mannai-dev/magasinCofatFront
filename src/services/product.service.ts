import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl: string;
  constructor(private http: HttpClient) {
    this.productUrl = environment.baseUrl + 'products';
  }
  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productUrl}`+'/list');
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/find/${id}`);
  }
}
