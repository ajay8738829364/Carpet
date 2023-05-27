import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-koti-sale-bill',
  templateUrl: './koti-sale-bill.component.html',
  styleUrls: ['./koti-sale-bill.component.css']
})
export class KotiSaleBillComponent {

  currentDate = new Date();


  customer= new FormControl();
  customerList:any;
  
}
