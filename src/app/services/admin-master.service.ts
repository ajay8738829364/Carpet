import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMasterService {


apiUrl='http://127.0.0.1:3000/api'


  constructor( private httpClient : HttpClient ) { }


  ledgerAccount( data:any): Observable < any >{
return data;
  }
}
