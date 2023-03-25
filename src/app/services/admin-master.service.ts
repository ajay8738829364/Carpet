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

  getRawMaterial(){
    return this.http.get(this.apiUrl2+'/raw_material');
  }





  ledgerAccount( data:any): Observable < any >{
return data;
  }

//////////////////////
/////////// here code for finishing ledger api service
///////
////

finishingLedger(data: any):Observable<any>{
console.log(data);
  return this.http.post(this.apiUrl2 +'/finishing_ledger_data', data, {
    headers: new HttpHeaders().set('accept', 'application/json'),
  });
}


//////////////////////
/////////// here code for SizeMaster api service
///////
////

sizeMaster(data: any):Observable<any>{

  return this.http.post(this.apiUrl2 +'/master_of_size', data, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}

getSizeMaster(){
  return this.http.get(this.apiUrl2+'/size_master');
}




//////////////////////
/////////// here code for BuyerMaster api service
///////
////

buyerMaster(data:any){
  console.log(data);
  return this.http.post(this.apiUrl2 +'/buyer_details', data, {
    headers: new HttpHeaders().set('accept', 'application/json'),
  });
}
getBuyerMaster(){
  return this.http.get(this.apiUrl2 +'/buyer');
  // return this.http.get(this.apiUrl2+'/size_master');
}

//////////////////////
/////////// here code for Dying Master api service
///////
////
dyingMaster(data:any){
  debugger
  console.log(data);
  return this.http.post(this.apiUrl2 +'/dying_master', data, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}

getDyingMaster(){
  return this.http.get(this.apiUrl2 +'/dying_master_data');
  // return this.http.get(this.apiUrl2+'/size_master');
}
}
