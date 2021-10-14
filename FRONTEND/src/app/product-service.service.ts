import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient: HttpClient) {}

  public getCatalogue(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(environment.baseUrl);
  }
}
