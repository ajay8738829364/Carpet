import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }


  MaterialImage:any;


  public apiPath={
    baseUrl:'https://carpet.emarketking.in/public/images',
    MaterialImage:'/raw_material/'

  }
}
