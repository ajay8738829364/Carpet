import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMasterService {


apiUrl='http://127.0.0.1:3000/api'
apiUrl2='http://carpet.emarketking.in/public/api'


constructor(private http: HttpClient) {}
//////////////////////
/////////// here code for  api service
///////
////
  rawMaterial(data: any): Observable<any> {
    console.log('here data of raw material service  ');
    return this.http.post(this.apiUrl2 +'/raw_material_data', data, {
      headers: new HttpHeaders().set('content-type', 'application/json'),
    });
  }

  ledgerAccount( data:any): Observable < any >{
return data;
  }



}
