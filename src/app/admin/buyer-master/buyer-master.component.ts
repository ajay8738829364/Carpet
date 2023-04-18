import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

import { Country, State, City } from 'country-state-city';

import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';

import * as intlTelInput from 'intl-tel-input';
import { CountryStateCitysService } from 'src/app/services/country-state-citys.service';
@Component({
  selector: 'app-buyer-master',
  templateUrl: './buyer-master.component.html',
  styleUrls: ['./buyer-master.component.css'],
})
export class BuyerMasterComponent implements OnInit {
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  preferredCountries: CountryISO[] = [  ];

  // separateDialCode2 = true;
  // SearchCountryField2 = SearchCountryField;
  // CountryISO2 = CountryISO;
  // PhoneNumberFormat2 = PhoneNumberFormat;

  // preferredCountries2: CountryISO[] = [

  // ];

  // phoneForm = new FormGroup({
  //    phone: new FormControl(undefined, [Validators.required])
  //  });

  @ViewChild('addressFocus') addressFocus!: ElementRef;
  @ViewChild('cityFocus') cityFocus!: ElementRef;
  @ViewChild('stateFocus') stateFocus!: ElementRef;
  @ViewChild('countryFocus') countryFocus!: ElementRef;
  @ViewChild('zipCodeFocus') zipCodeFocus!: ElementRef;
  @ViewChild('contactFocus') contactFocus!: ElementRef;

  @ViewChild('emailFocus') emailFocus!: ElementRef;
  @ViewChild('bankName') bankName!: ElementRef;
  @ViewChild('bankAddressFocus') bankAddressFocus!: ElementRef;
  // @ViewChild('bankMobile') bankMobile!: ElementRef;
  @ViewChild('bankEmail') bankEmail!: ElementRef;

  public frmBuyerMaster!: FormGroup;

  responsMessage: any;

  country = new FormControl('');

  countryList:any;

  state = new FormControl('');

  stateList:any;

  city = new FormControl('');

  cityList: any;
  constructor(
    private _formBuilder: FormBuilder,
    private adminService: AdminMasterService,
    private _snackBar: SnackBarService,
    private countrystatecityService: CountryStateCitysService
  ) {}

  onEnterBuyerName(event: any): void {
    if (event.which === 13) {
      this.addressFocus.nativeElement.focus();
    }
  }

  onAddressFocus(event: any): void {
    if (event.which === 13) {
      this.cityFocus.nativeElement.focus();
    }
  }

  onCityFocus(event: any): void {
    if (event.which === 13) {
      this.stateFocus.nativeElement.focus();
    }
  }
  onStateFocus(event: any): void {
    if (event.which === 13) {
      this.countryFocus.nativeElement.focus();
    }
  }
  onCountryFocus(event: any): void {
    if (event.which === 13) {
      this.zipCodeFocus.nativeElement.focus();
    }
  }

  onZipCodeFocus(event: any): void {
    if (event.which === 13) {
      this.contactFocus.nativeElement.focus();
    }
  }
  onContactNo(event: any): void {
    if (event.which === 13) {
      this.emailFocus.nativeElement.focus();
    }
  }

  // onCountry(data: any) {
  //   console.log(data);
  //   this.country = data;
  // }
  // onState(data: any) {
  //   console.log(data);
  //   this.state = data;
  // }
  // onCity(data: any) {
  //   console.log(data);
  //   this.city = data;
  // }
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
    this.onCountry();

  }

  onCountry() {
    debugger
    this.countrystatecityService.getCountry().subscribe((data: any) => {
      this.countryList = data.data;

      console.log('Countries fetched', this.countryList);
    });
  }
  countryById(event:any){
this.countrystatecityService.getState(event).subscribe((res:any)=>{
  this.stateList = res.data;
  console.log('state by country id ', this.stateList);
});
  }
  onStateById(data: any) {
    debugger
    this.countrystatecityService.getCity(data).subscribe((res:any)=>{


    console.log(res);
    this.cityList = res.data;
  });
}

  addbuyerMaster() {
    console.log(this.frmBuyerMaster.value);
    const p: any = this.frmBuyerMaster.value.mobile;
    console.log(p.internationalNumber);

    debugger;
    const p2: any = this.frmBuyerMaster.value.mobile2;
    console.log(p2.internationalNumber);
    const formData = this.frmBuyerMaster.value;

    var data = {
      byr_name: formData.buyerName,
      address: formData.address,
      contact_no: p.internationalNumber,
      byr_email: formData.email,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      zip_code: formData.zipCode,

      bank_name: formData.bank,
      bank_address: formData.bank_address,

      bank_mobile: p2.internationalNumber,
      bank_email: formData.email2,
    };
    debugger;
    this.adminService.buyerMaster(data).subscribe(
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
}
