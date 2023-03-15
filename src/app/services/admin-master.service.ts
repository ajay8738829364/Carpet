import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMasterService {

  constructor( private httpClient : HttpClient ) { }


  ledgerAccount( data:any): Observable < any >{
return data;
  }
}
