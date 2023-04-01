import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-purchase-bill',
  templateUrl: './purchase-bill.component.html',
  styleUrls: ['./purchase-bill.component.css']
})
export class PurchaseBillComponent {


  chalanNo = new FormControl('')

  chalanNoList:string[]=['chalan 1','Chalan 2'];
}
