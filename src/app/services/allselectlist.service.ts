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





}
