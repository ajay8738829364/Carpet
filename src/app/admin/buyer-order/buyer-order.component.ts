import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HelperService } from 'src/app/helper/helper.service';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { AllselectlistService } from 'src/app/services/allselectlist.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

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
  responsMessage: any;
  groundColours:any;
  borderColours:any;

constructor( private _formBuilder: FormBuilder,
  private adminService: AdminMasterService,
  private _snackBar: SnackBarService,
  private _helper: HelperService,
  private _selectListService:AllselectlistService
  ){}



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
  orderDate:formData.orderDate.toString().substring(0,16),
  shippingDate:formData.shippingDate.toString().substring(0,16),
  orderType:formData.orderType,
  uom:formData.uom,
  issueUnit:formData.issueUnit,
  priority:formData.priority,
  area:formData.area,
  quality:'formData.quality',
  design:'formData.design',
  groundColour:formData.groundColour,
  borderColour:formData.borderColour,
  size:formData.size,
  type:formData.type,
  pcs:formData.pcs,
  totalArea:formData.totalArea
}
this.adminService.addBuyerOrder(data).subscribe(
  (resp: any) => {
    this.responsMessage = resp.message;
    this._snackBar.openSnackBar(this.responsMessage, '');
  },
  (error) => {
    if (error.error.msg) {
      this.responsMessage = error.error.message;
    } else {
      this.responsMessage = global.genricError;
    }
    this._snackBar.openSnackBar(this.responsMessage, global.error);
    console.log('data', data);
  }
);
}

getProductQuality() {
  this._selectListService.getProductionQuality().subscribe((resp: any) => {
    console.log(resp.data);
    this.qualityList = resp.data;
  });
}
onDesign(data:any){
  console.log(data);

  this._selectListService.getDesignByQtyId(data).subscribe((resp:any)=>{
    console.log(resp.data)

    this.designList= resp.data;
  });
}
onGroundBorder(data:any){

  debugger
      this._selectListService.getGroundBorder(data).subscribe((resp:any)=>{
  console.log(resp.data);
  this.groundColours=resp.data[0].ground;
  this.borderColours=resp.data[0].border;
  console.log(this.groundColours);
  console.log(this.borderColours);
      });

    }
}
