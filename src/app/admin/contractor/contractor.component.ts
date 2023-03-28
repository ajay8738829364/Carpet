import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css'],
})
export class ContractorComponent implements OnInit {
  group_name: any;
  groupNameList: any = ['q1', 'q2'];


  product_name: any;
  productList: any = ['p1', 'p2'];

  responsMessage: any;

  adharImage!: File;
  panImage!: File;

  frmContractor!: FormGroup;



  constructor(
    private _service: AdminMasterService,
    private _snackBar: SnackBarService,
    private _formBuilder: FormBuilder
  ) {}



  ngOnInit(): void {
    this.frmContractor = this._formBuilder.group({
      product_name: [''],
      group_name: [''],
      viewer_name: [''],
      address: [''],
      state: [''],
      zip_code: [''],
      adhar_no: [''],
      pan_no: [''],
      ppft: [''],
      adhar_image: [''],
      pan_image: [''],
    });
  }

  onGroupSelectList(data: any) {
    console.log(data);
    console.log(this.frmContractor.value);
  }

  onProductSelectList(data:any){

  }

  selectImage(event: any) {
    this.adharImage = event.target.files[0];
    console.log(this.adharImage);
  }
  selectImage2(event: any) {
    this.panImage = event.target.files[0];

    console.log(this.panImage);
  }
  addContractor() {
    const formData = this.frmContractor.value;
    var data = {
      product_name: formData.product_name,
      group_name: formData.group_name,
      viewer_name: formData.viewer_name,
      address: formData.address,
      state: formData.state,
      zip_code: formData.zip_code,
      adhar_no: formData.adhar_no,
      pan_no: formData.pan_no,
      ppft: formData.ppft,

    };
debugger
    this._service.addContractors(data, this.adharImage, this.panImage)
      .subscribe(
        (resp) => {
          debugger;
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
        }
      );
  }
}
