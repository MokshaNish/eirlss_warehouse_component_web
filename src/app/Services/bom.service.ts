import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BomService {

  url = "http://localhost:8080/billOfMaterials";

  constructor(private http : HttpClient) { }

  recordBOMDetails(bom){

    return this.http.post(this.url, bom);
  }
}
