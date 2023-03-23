import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'carpet';


  constructor( private route:Router, private userService : UserAuthService){}

  ngOnInit(): void {
    if( localStorage.getItem('token')!= null ){

      this.userService.checkToken().subscribe((responseData:any)=>{
        this.route.navigate(['carpet/dashboard']);

      }, (error)=>{
        console.log('err');

      });

    }
  }



}
