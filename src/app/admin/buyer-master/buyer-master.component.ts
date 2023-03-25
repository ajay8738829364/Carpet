import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';



@Component({
  selector: 'app-buyer-master',
  templateUrl: './buyer-master.component.html',
  styleUrls: ['./buyer-master.component.css'],
})
export class BuyerMasterComponent implements OnInit {
  public frmBuyerMaster!: FormGroup;

  responsMessage:any;

  country  = new FormControl('');

  countryList: string[] = ['India'];

  state  = new FormControl('');

  stateList: string[] = ['Andhra Pradesh','Arunachal Pradesh',' Assam','Bihar','Chhattisgarh','Goa','Gujarat'

  ];

  city  = new FormControl('');

  cityList: string[] = ['Anantapur','Prakasam'];
  constructor(
    private _formBuilder: FormBuilder,
    private adminService: AdminMasterService,
    private _snackBar: SnackBarService
  ) {}


  onCountry(data:any){
console.log(data)
this.country=data;
  }
  onState(data:any){
    console.log(data)
    this.state=data;
  }
  onCity(data:any){
    console.log(data)
    this.city=data;
  }
  ngOnInit(): void {
    this.frmBuyerMaster = this._formBuilder.group({
      buyerName: [''],
      address: [''],
      mobile: [''],
      email: [''],
      country: [''],
      state: [''],
      city: [''],
      zipCode: [''],


      bank: [''],
      branch: [''],

      mobile2: [''],
      email2: [''],
    });
  }

  addbuyerMaster() {
    console.log(this.frmBuyerMaster.value);

    const formData = this.frmBuyerMaster.value;

    var data = {
      name: formData.buyerName,
      address: formData.address,
      mobile: formData.mobile,
      email: formData.email,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      zip_code: formData.zipCode,
      // shipTo: formData.shipTo,
      // notify: formData.notify,
      // address2: formData.address2,
      bank_name: formData.bank,
      bank_branch: formData.branch,
      // passbook: formData.passbook,
      bank_contact: formData.mobile2,
      bank_email: formData.email2,
    };

    this.adminService.buyerMaster(data).subscribe(
      (resp:any) => {
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
}
