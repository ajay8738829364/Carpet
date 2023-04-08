import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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


  @ViewChild('addressFocus')addressFocus!:ElementRef;
@ViewChild('cityFocus')cityFocus!:ElementRef;
@ViewChild('stateFocus')stateFocus!:ElementRef;
@ViewChild('countryFocus')countryFocus!:ElementRef;
@ViewChild('zipCodeFocus')zipCodeFocus!:ElementRef;
@ViewChild('contactFocus')contactFocus!:ElementRef;

@ViewChild('emailFocus')emailFocus!:ElementRef;
@ViewChild('bankName')bankName!:ElementRef;
@ViewChild('bankAddressFocus')bankAddressFocus!:ElementRef;
@ViewChild('bankMobile')bankMobile!:ElementRef;
@ViewChild('bankEmail')bankEmail!:ElementRef;

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


  onEnterBuyerName(event:any):void{
    if (event.which === 13) {
      this.addressFocus.nativeElement.focus();
    }

  }

  onAddressFocus(event:any):void{
    if(event.which===13){
      this.cityFocus.nativeElement.focus();
    }
  }

  onCityFocus(event : any):void{
    if(event.which===13){
      this.stateFocus.nativeElement.focus();
    }
  }
  onStateFocus(event:any):void{
    if(event.which===13){
      this.countryFocus.nativeElement.focus();
    }
  }
  onCountryFocus(event:any):void{
    if(event.which === 13 ) {

      this.zipCodeFocus.nativeElement.focus();
    }
  }

  onZipCodeFocus(event:any):void{
    if(event.which===13){
this.contactFocus.nativeElement.focus();
    }
  }
  onContactNo(event:any):void{
    if(event.which===13){
      this.emailFocus.nativeElement.focus();
          }
  }




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
      bank_address: [''],

      mobile2: [''],
      email2: [''],
    });
  }

  addbuyerMaster() {
    console.log(this.frmBuyerMaster.value);
debugger
    const formData = this.frmBuyerMaster.value;

    var data = {
      byr_name: formData.buyerName,
      address: formData.address,
      contact_no: formData.mobile,
      byr_email: formData.email,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      zip_code: formData.zipCode,

      bank_name: formData.bank,
      bank_address: formData.bank_address,

      bank_mobile: formData.mobile2,
      bank_email: formData.email2,
    };
debugger
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
