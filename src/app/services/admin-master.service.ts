import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMasterService {


// apiUrl='http://127.0.0.1:3000/api'
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

//////////////////////
/////////// here code for Add Contractor api service
///////
////
  addContractors( data: any,adharImage:File,panImage:File): Observable < any >{
debugger
    const formData = new FormData();
    formData.append('product_name',data.product_name);
    formData.append('group_name',data.group_name);
    formData.append('address',data.address);
    formData.append('state',data.state);
    formData.append('zip_code',data.zip_code);
    formData.append('adhar_no',data.adhar_no);
    formData.append('adhar_image',adharImage,adharImage.name);
    formData.append('pan_no',data.pan_no);
    formData.append('pan_image',panImage,panImage.name);
    // formData.append('contact',data.contact);
    formData.append('ppft',data.ppft);
    // formData.append('adhar_no',data.adhar_no);
    formData.append('viewer_name',data.viewer_name);
debugger
    return this.http.post(this.apiUrl2 +'/contractor_data', formData, {
      headers: new HttpHeaders().set('content-type', 'application/json'),
    });
    }


  ledgerAccount( data:any): Observable < any >{
return data;
  }

//////////////////////
/////////// here code for finishing ledger api service
///////
////


finishingLedger(data: any,adharImage:File,panImage:File):Observable<any>{
  debugger

  const formData = new FormData();

  formData.append('group_name',data.group_name);
  formData.append('address',data.address);
  formData.append('state',data.state);
  formData.append('zip_code',data.zip_code);
  formData.append('adhar_no',data.adhar_no);
  formData.append('adhar_image',adharImage,adharImage.name);
  formData.append('pan_no',data.pan_no);
  formData.append(' pan_image',panImage,panImage.name);
  formData.append('contact',data.contact);
  formData.append('email',data.email);
  formData.append('adhar_no',data.adhar_no);
  formData.append('password',data.password);

console.log(data);
console.log(formData);
  return this.http.post(this.apiUrl2 +'/finishing_ledger_data', formData, {
    headers: new HttpHeaders().set('accept', 'application/json'),
  });
}



getFinisherLedgerData(){
  return this.http.get(this.apiUrl2+'/finishing_ledger');
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
