import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  apiUrl = 'http://127.0.0.1:3000/api';
apiUrl2='http://carpet.emarketking.in/public/api'
  constructor(private http: HttpClient) {}
//////////////////////
/////////// here code for sinup api service
///////
////
  register(data: any): Observable<any> {
    console.log('here data of register user service');
    return this.http.post(this.apiUrl2 +'/user_register', data, {
      headers: new HttpHeaders().set('content-type', 'application/json'),
    });
  }

//////////////////////
/////////// here code for signin api service
///////
////

login(data:any):Observable<any>{
  return this.http.post(this.apiUrl2+'/loginData',data,{
    headers:new HttpHeaders().set('content-type','application/json')
  });
}

//////////////////////
/////////// here code for check role  api service
///////
////


checkToken(){
  return this.http.get('');
}



}
