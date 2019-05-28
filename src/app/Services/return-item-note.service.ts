import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnItemNote } from '../Models/ReturnItemNote';

@Injectable({
  providedIn: 'root'
})
export class ReturnItemNoteService {

  apiURL = "http://localhost:8080/returnNote";

  constructor(private http: HttpClient) { }

  getAll() {
    
    return this.http.get<[]>(this.apiURL);
  }

  get(id) {

    return this.http.get<ReturnItemNote>(this.apiURL + `/${id}`);
 }
}
