import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  apiUrl = 'http://127.0.0.1:3000/api';

  constructor( private httpClient :  HttpClient) { }

  getDetails(){
    return this.httpClient.get(this.apiUrl+'/dashboard/details');
  }
}
