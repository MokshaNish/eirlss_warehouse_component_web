import { ItemDetail } from './../Models/ItemDetail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailService {

  apiURL = "http://localhost:8080/itemDetail";

  constructor(private http: HttpClient) { }

  getAll() {
    
    return this.http.get<[]>(this.apiURL);
  }

  get(id) {

     return this.http.get<ItemDetail>(this.apiURL + `/${id}`);
  }

  AddItem(itemDetail) {

    return this.http.post(this.apiURL, itemDetail);
  }

  deleteItem(id){
    
    return this.http.delete<ItemDetail>(this.apiURL + `/${id}`);
  }

}
