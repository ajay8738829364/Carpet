import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';
// import * as countrycitystatejson from 'countrycitystatejson';
@Injectable({
  providedIn: 'root'
})
export class CountryStateCitysService {


 apiUrl:any='http://carpet.emarketking.in/public/api'
  constructor(private httpclient: HttpClient) { }

getCountry(){
  return this.httpclient.get(this.apiUrl+'/country');

}

getState(countryId:any){
  return this.httpclient.get(this.apiUrl+'/state/'+countryId);
}

getCity(stateId:any){
  debugger
  return this.httpclient.get(this.apiUrl+'/city/'+stateId);
}

}
