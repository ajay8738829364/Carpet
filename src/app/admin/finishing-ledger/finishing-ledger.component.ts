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
  groupName :any;
  groupNameList : any= ['q1','q2'] ;

  responsMessage:any;
adharImage!:File;
panImage!:File;



  frmFinishingLedger !: FormGroup;
constructor(private _snackBar : SnackBarService, private _formBuilder : FormBuilder,private  adminService : AdminMasterService){}


ngOnInit(): void {
  this.frmFinishingLedger = this._formBuilder.group({
   groupName:[''],
   address:[''],
   state:[''],
   zipCode:[''],
   aadharNo:[''],
   adhar_image:[''],
   panNo:[''],
   pan_image:[''],
   contact:[''],
   email:[''],
   passward:[''],

  });
}
selectImage(event: any) {
  this.adharImage = event.target.files[0];
  console.log( this.adharImage);
}
selectImage2(event: any) {
  this.panImage= event.target.files[0];


  console.log( this.panImage);
}
addFinishingLedger(){

const formData = this.frmFinishingLedger.value;
var data = {
   group_name:formData.groupName,
   address:formData.address,
   state:formData.state,
   zip_code:formData.zipCode,
   adhar_no:formData.aadharNo,
  // adhar_image:formData.adhar_image ,
   pan_no:formData.panNo,
  //  pan_image:formData.pan_image,
   contact:formData.contact,
   email:formData.email,
   password:formData.passward,
}


console.log(data);

  this.adminService.finishingLedger(data,this.adharImage,this.panImage).subscribe(
        (resp) => {
          debugger;
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

    onGroupSelectList(data:any){

      console.log(data);
console.log(this.frmFinishingLedger.value);
    }
}




