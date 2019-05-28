import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoodReceivedNotice } from '../Models/GoodsReceivedNotice';

@Injectable({
  providedIn: 'root'
})
export class GoodsreceivedService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:8080/goodReceivedNotice"

  getAll() {

return this.http.get<[]>(this.url) 
 }


 addGoodItems(goodItems) {

  return this.http.post(this.url, goodItems);
}
 
  
}
