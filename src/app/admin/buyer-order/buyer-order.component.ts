import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HelperService } from 'src/app/helper/helper.service';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-buyer-order',
  templateUrl: './buyer-order.component.html',
  styleUrls: ['./buyer-order.component.css']
})
export class BuyerOrderComponent implements OnInit {
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
qualityList :any;

design=new FormControl('');
designList :any;

size=new FormControl('');
sizeList :string[]=['d1','d2'];

type=new FormControl('');
typeList :string[]=['d1','d2'];


frmBuyerOrder!:FormGroup;

constructor( private _formBuilder: FormBuilder,
  private adminService: AdminMasterService,
  private _snackBar: SnackBarService,
  private _helper: HelperService){}



ngOnInit(): void {
this.frmBuyerOrder = this._formBuilder.group({
  buyerName:[''],
  orderNo:[''],
  orderDate:[''],
  shippingDate:[''],
  orderType:[''],
  uom:[''],
  issueUnit:[''],
  priority:[''],
  area:[''],
  quality:[''],
  design:[''],
  groundColour:[''],
  borderColour:[''],
  size:[''],
  type:[''],
  pcs:[''],
  totalArea:['']
});
}
// buyerName','orderNo','orderDate','shippingDate','orderType','uom','issueUnit','priority',
// 'area','quality','design','groundColour','borderColour','size','type','pcs','totalArea','status'
onAddBuyerOrder(){
  // .toString().substring(0,16),

console.log(this.frmBuyerOrder.value);

const formData =this.frmBuyerOrder.value;
var data={
  buyerName:formData.buyerName,
  orderNo:formData.orderNo,
  orderDate:formData.orderDate,
  shippingDate:formData.shippingDate,
  orderType:formData.orderType,
  uom:formData.uom,
  issueUnit:formData.issueUnit,
  priority:formData.priority,
  area:formData.area,
  quality:formData.quality,
  design:formData.design,
  groundColour:formData.groundColour,
  borderColour:formData.borderColour,
  size:formData.size,
  type:formData.type,
  pcs:formData.pcs,
  totalArea:formData.totalArea
}

}
}
