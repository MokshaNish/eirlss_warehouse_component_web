import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransactionDetailService {

  apiURL = "http://localhost:8080/TransactionDetail";

  constructor(private http : HttpClient) { }

  getAll() {

    return this.http.get<[]>(this.apiURL) 
     }

}
