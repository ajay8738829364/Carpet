import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-buyer-order',
  templateUrl: './buyer-order.component.html',
  styleUrls: ['./buyer-order.component.css']
})
export class BuyerOrderComponent {
  buyerName = new FormControl('');
  buyerList :string[]=['buyer 1','buyer 2']

  orderType = new FormControl('');
  orderTypeList :string[]=['buyer 1','buyer 2']

  priority = new FormControl('')
  priorityList:string []=['Normal','First','Second'];
}
