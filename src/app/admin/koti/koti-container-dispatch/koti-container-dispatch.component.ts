import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { AllselectlistService } from 'src/app/services/allselectlist.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-koti-container-dispatch',
  templateUrl: './koti-container-dispatch.component.html',
  styleUrls: ['./koti-container-dispatch.component.css']
})
export class KotiContainerDispatchComponent implements OnInit{

  frmContainerDispatch!:FormGroup;

  countrys= new FormControl();

  countryList:any;

  currency= new FormControl();
  currencyList:any;

  selectImagePan(event :any){

  }

  constructor(
    private fb: FormBuilder,
    private _service: AdminMasterService,
    private _selectList: AllselectlistService,
    private _matSnack: SnackBarService
  ) {}

ngOnInit(): void {

  this.frmContainerDispatch = this.fb.group({
    frmReciepeArray: this.fb.array([])
  });

}
  /////////////////////////////////////////////
  ///////////////// add dynamic form control
  ///////
  onAddReceipe(): FormArray {
    return this.frmContainerDispatch.get('frmReciepeArray') as FormArray;
  }
  // get frmReciepeArray() {
  //   return this.productForm.get("frmReciepeArray") as FormArray;
  // }

  newReceipe(): FormGroup {
    return this.fb.group({
     importerName: '',
      invoiceNo: '',
      invoiceAmount: [''],
      invoicePdf: [''],
      blCopyPdf: '',

    });
  }

  addReceipeRow() {
    this.onAddReceipe().push(this.newReceipe());
  }

  removeReceipe(i: number) {
    this.onAddReceipe().removeAt(i);
  }


}
