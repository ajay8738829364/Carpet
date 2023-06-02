import { Component, OnInit } from '@angular/core';
 declare function ak(): any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  ngOnInit(): void {
    ak ();
  }

}
 

