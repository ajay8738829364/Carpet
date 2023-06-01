import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllselectlistService {

  constructor( private http : HttpClient) { }

selectListApiUrl ='http://carpet.emarketking.in/public/api';
apiUrl='http://127.0.0.1:4000/api';
getAllMaterialItem(){
  return this.http.get(this.selectListApiUrl+'/item');
}

getGroupList(){
  return this.http.get(this.selectListApiUrl+'/group_name');
}


getCountList(data:any){
  return this.http.get(this.selectListApiUrl+'/get_material_data/'+data);
}

getColourByCountId(_id:any){
  debugger
  return this.http.get(this.selectListApiUrl+'/colour_count/'+_id);
}
getProductionQuality(){
  return this.http.get(this.selectListApiUrl+'/productionQuality');
}
getExportQuality(){
  return this.http.get(this.selectListApiUrl+'/exportQuality');
}

// getQuality(){
//   return this.http.get(this.selectListApiUrl+'/productionQuality');
// }

getDesignByQtyId(_qtyId:any){
  debugger
  console.log(_qtyId);
  return this.http.get(this.selectListApiUrl+'/shead_card_qty/'+_qtyId);
}




getGroundBorder(_designTxt:any){
 console.log(_designTxt);
  return this.http.get(this.selectListApiUrl+'/shead_card_design/'+_designTxt);
}


getSizeYaard(){
  return this.http.get(this.selectListApiUrl+'/size_in_yard');
}

getYaardTotal(_yaardID:any){
  return this.http.get(this.selectListApiUrl+'/totalYard/'+_yaardID);
}




getDesign(): Observable<any> {
  return this.http.get<any>(this.apiUrl + '/getDesignList');
}

getColour(): Observable<any> {
  return this.http.get<any>(this.apiUrl + '/getColourList');
}

getSize(): Observable<any> {
  return this.http.get<any>(this.apiUrl + '/getSizeList');
}
}
