import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierGoodsService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:8080/supplierGood"

  getAll() {

return this.http.get<[]>(this.url) 
 }

}
