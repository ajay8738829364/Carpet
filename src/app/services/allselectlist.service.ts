import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllselectlistService {

  constructor( private http : HttpClient) { }

selectListApiUrl ='http://carpet.emarketking.in/public/api';

getAllMaterialItem(){
  return this.http.get(this.selectListApiUrl+'/item');
}

getGroupList(){
  return this.http.get(this.selectListApiUrl+'/group_name');
}


getCountList(data:any){
  return this.http.get(this.selectListApiUrl+'/get_material_data/'+data);
}
}
