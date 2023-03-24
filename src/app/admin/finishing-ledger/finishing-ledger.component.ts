import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

@Component({
  selector: 'app-finishing-ledger',
  templateUrl: './finishing-ledger.component.html',
  styleUrls: ['./finishing-ledger.component.css']
})
export class FinishingLedgerComponent  implements OnInit{
  groupName = new FormControl('');
  groupNameList : string [] = ['g1','g2'];

  responsMessage:any;




  frmFinishingLedger !: FormGroup;
constructor(private _snackBar : SnackBarService, private _formBuilder : FormBuilder,private  adminService : AdminMasterService){}


ngOnInit(): void {
  this.frmFinishingLedger = this._formBuilder.group({
  //  groupName:[''],
   address:[''],
   state:[''],
   zipCode:[''],
   aadharNo:[''],
   aadharImage:[''],
   panNo:[''],
   panImage:[''],
   contact:[''],
   email:[''],
   passward:[''],

  });
}


addFinishingLedger(){

const formData = this.frmFinishingLedger.value;AdminMasterService
var data = {
  // group_name:formData.groupName,
   address:formData.address,
   state:formData.state,
   zip_code:formData.zipCode,
   adhar_no:formData.aadharNo,
   adhar_image:formData.aadharImage ,
   pan_no:formData.panNo,
   pan_image:formData.panImage,
   contact:formData.contact,
   email:formData.email,
   password:formData.passward,
}




  this.adminService.finishingLedger(data).subscribe(
        (resp) => {
          this.responsMessage = resp.message;
          this._snackBar.openSnackBar(this.responsMessage, '');
        },
        (error) => {
          if (error.error.msg) {
            this.responsMessage = error.error.message;
          } else {
            this.responsMessage = global.genricError
          }
          this._snackBar.openSnackBar(this.responsMessage, global.error);

        }
      );
    }
}




