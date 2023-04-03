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
  orderTypeList :string[]=['Order','Stock','Sample']

  priority = new FormControl('')
  priorityList:string []=['Normal','First','Second'];

  uom = new FormControl('');
  uomList : string[]=['SQ MTR','SQ YARD'];

issueUnit = new FormControl('');
issueUnitList : string[]=['SQ YARD','OTHERS 1','OTHERS 2'];

qualitys = new FormControl('');
qualityList :string[]=['q1','q2'];

design=new FormControl('');
designList :string[]=['d1','d2'];

size=new FormControl('');
sizeList :string[]=['d1','d2'];

type=new FormControl('');
typeList :string[]=['d1','d2'];
}
