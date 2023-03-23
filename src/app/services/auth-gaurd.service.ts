import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {


  constructor( private route : Router) { }

  public isAuthentication():boolean{
    const token = localStorage.getItem('token');
    if(!token){
      this.route.navigate(['/']);
      return false;
    }
    else{
      return true;
    }
  }
}
