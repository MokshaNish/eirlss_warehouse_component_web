import { MasterStockRecord } from './../Models/MasterStockRecord';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterStockRecordService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:8080/masterStockRecord"

  qtyUpdate(qty : MasterStockRecord){
    return this.http.put(this.url, qty);

  }

  getAll() {
    
    return this.http.get<[]>(this.url);
  }

  get(id) {

     return this.http.get<MasterStockRecord>(this.url + `/${id}`);
  }

  AddItem(itemDetail) {

    return this.http.post(this.url, itemDetail);
  }

  deleteItem(id){
    
    return this.http.delete<MasterStockRecord>(this.url + `/${id}`);
  }

  archiveItem(item:MasterStockRecord){
    return this.http.put(this.url, item);

  }
}
