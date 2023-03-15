import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buyer-master',
  templateUrl: './buyer-master.component.html',
  styleUrls: ['./buyer-master.component.css'],
})
export class BuyerMasterComponent implements OnInit {
  public frmBuyerMaster!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

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
      shipTo: [''],
      notify: [''],
      address2: [''],
      bank: [''],
      branch: [''],
      passbook: [''],
      mobile2: [''],
      email2: [''],
    });
  }

  addbuyerMaster() {
    console.log(this.frmBuyerMaster.value);

    const formData = this.frmBuyerMaster.value;

    var data = {
      buyerName: formData.buyerName,
      address: formData.address,
      mobile: formData.mobile,
      email: formData.email,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      zipCode: formData.zipCode,
      shipTo: formData.shipTo,
      notify: formData.notify,
      address2: formData.address2,
      bank: formData.bank,
      branch: formData.branch,
      passbook: formData.passbook,
      mobile2: formData.mobile2,
      email2: formData.email2,
    };
  }
}
