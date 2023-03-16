import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
// import { response } from 'express';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

@Component({
  selector: 'app-ledger-account',
  templateUrl: './ledger-account.component.html',
  styleUrls: ['./ledger-account.component.css'],
})
export class LedgerAccountComponent implements OnInit {
  public frmledgerAccount!: FormGroup;

  responseMessage: any;
  constructor(
    private _formBulider: FormBuilder,
    private _snackBarService: SnackBarService,
    private adminService: AdminMasterService,
    private _router : Router
  ) {}

  ngOnInit(): void {
    this.frmledgerAccount = this._formBulider.group({
      code: [''],
      photoNo: [''],
      partyName: [
        '',
        [Validators.required, Validators.pattern(global.nameRegex)],
      ],
      groupName: [''],
      fatherName: [
        '',
        [Validators.required, Validators.pattern(global.nameRegex)],
      ],
      address: [''],
      village: [''],
      aadharNo: [''],
      aadharPdf: [''],
      pan: [''],
      panPdf: [''],
      guarantor1: [''],
      guarantor1FatherName: [''],
      guarantor1Address: [''],
      guarantor2: [''],
      guarantor2FatherName: [''],
      guarantor2Address: [''],
      mobileNo: [
        '',
        [Validators.required, Validators.pattern(global.contactRegex)],
      ],
      group: [''],
      folio: [''],
      tinPan: [''],
      gstin: [''],
    });
  }
  addLedgerAccount() {
    const formData = this.frmledgerAccount.value;

    var data = {
      code: formData.code,
      photoNo: formData.photoNo,
      partyName: formData.partyName,
      groupName: formData.groupName,
      fatherName: formData.fatherName,
      address: formData.address,
      village: formData.village,
      aadharNo: formData.aadharNo,
      aadharPdf: formData.aadharPdf,
      pan: formData.pan,
      panPdf: formData.panPdf,
      guarantor1: formData.guarantor1,
      guarantor1FatherName: formData.guarantor1FatherName,
      guarantor1Address: formData.guarantor1Address,
      guarantor2: formData.guarantor2,
      guarantor2FatherName: formData.guarantor2FatherName,
      guarantor2Address: formData.guarantor2Address,
      mobileNo: formData.mobileNo,
      group: formData.group,
      folio: formData.folio,
      tinPan: formData.tinPan,
      gstin: formData.gstin,
    };

    this.adminService.ledgerAccount(data).subscribe(response => {
      this.responseMessage= response?.message;
      this._snackBarService.openSnackBar(this.responseMessage,"");
     // this._router.navigate(['/']);


    },
    (error:any)=>{
      if(error.error?.message){
        this.responseMessage = error.error?.message
      }
      else{
        this.responseMessage= global.genricError
      }
      this._snackBarService.openSnackBar(this.responseMessage,global.error);
    }
    );

    console.log('data', data);
  }
}
