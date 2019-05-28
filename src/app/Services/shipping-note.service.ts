import { ShippingNote } from './../Models/ShippingNote';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShippingNoteService {

  apiURL = "http://localhost:8080/shippingNote";

  constructor(private http: HttpClient) { }

  getAll() {
    
    return this.http.get<[]>(this.apiURL);
  }
  updateShip(item:ShippingNote){
    return this.http.put(this.apiURL, item);
  }
  
}
