import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DefectnoticeService {

  apiURL = "http://localhost:8080/defectNotice";

  constructor(private http: HttpClient) { }

  recordDetails(defectNotice) {

    return this.http.post(this.apiURL, defectNotice);
  }


  recordDetailsAll(defectNotice) {

    return this.http.post(this.apiURL + '/save-list', defectNotice);
  }


}
