import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { AllselectlistService } from 'src/app/services/allselectlist.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

import * as _ from 'lodash';
/// here i am use csv file code
import * as XLSX from 'xlsx';
import { MatDialog } from '@angular/material/dialog';
import { KotiCustomerComponent } from '../koti-customer/koti-customer.component';
import { CheckDespatchdataComponent } from '../check-despatchdata/check-despatchdata.component';

@Component({
  selector: 'app-koti-container-dispatch',
  templateUrl: './koti-container-dispatch.component.html',
  styleUrls: ['./koti-container-dispatch.component.css'],
})
export class KotiContainerDispatchComponent implements OnInit {
  frmContainerDispatch!: FormGroup;

  excelData: any;
  countryList: any = [
    'India',
    'United States',
    'China',
    'Russia',
    'East Germany (German Democratic Republic)',
    'Ukraine',
    'Japan',
  ];
  groups: any;
  currencyList: any = ['Rupee ₹ ', 'Dollar $ ', 'Euro €', 'Ruble ₽'];

  selectImagePan(event: any) {}
  csvFileData: any;
  constructor(
    private fb: FormBuilder,
    private _service: AdminMasterService,
    private _selectList: AllselectlistService,
    private _matSnack: SnackBarService,
    private _dialogRef: MatDialog
  ) {}

  openDialog() {
    this._dialogRef.open(CheckDespatchdataComponent);
  }

  ngOnInit(): void {
    this.frmContainerDispatch = this.fb.group({
      date: [''],
      portName: [''],
      country: [''],
      containerNo: [''],
      linerDetails: [''],
      currency: [,],
      total: [''],
      totalAmount: [''],
      frmReciepeArray: this.fb.array([]),
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
      importerName: [''],
      invoiceNo: [''],
      invoiceAmount: [''],
      invoicePdf: [''],
      blCopyPdf: [''],
      csvFile: [''],
    });
  }

  addReceipeRow() {
    this.onAddReceipe().push(this.newReceipe());
  }

  removeReceipe(i: number) {
    this.onAddReceipe().removeAt(i);
  }

  exlsArr: any = [];

  i: any = 0;
  readExcelFile(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
      this.excelData = XLSX.utils.sheet_to_json(
        workBook.Sheets[sheetNames[0]],
        {
          raw: false,

          dateNF: 'dd/mm/yyyy',
        }
      );
      console.log(this.excelData);
      console.log(this.excelData.date);
      this.exlsArr.push(this.excelData);

      if (this.exlsArr >= 0) {
        ++this.i;
      }
    };
  }

  containerDispatch() {
    const users = [
      { user: 'barney', age: 36, hobbies: ['soccer', 'basketball'] },
      { user: 'fred', age: 40, hobbies: ['soccer', 'golf'] },
      { user: 'tom', age: 25, hobbies: ['golf'] },
    ];

    const count = _.countBy(users.flatMap((user) => user.hobbies));
    console.log('this is a count by array', count);

    const formData = this.frmContainerDispatch.value;
    let i = 0;

    const length = formData.frmReciepeArray.length;
    var repc: any = [];
    for (i = 0; i <= length - 1; i++) {
      const receipeFormData = formData.frmReciepeArray[i];
      debugger;
      repc.push({
        importer_name: receipeFormData.importerName,
        invoiceNo: receipeFormData.invoiceNo,
        invoiceAmount: receipeFormData.invoiceAmount,
        invoicePdf: receipeFormData.invoicePdf,
        blCopyPdf: receipeFormData.blCopyPdf,
        csvFile: this.exlsArr[i],
      });
    }

    console.log(repc);

    debugger;

    var data = {
      date: formData.date,
      portName: formData.portName,
      country: formData.country,
      containerNo: formData.containerNo,
      linerDetails: formData.linerDetails,
      currency: formData.currency,
      total: formData.total,
      totalAmount: formData.totalAmount,
      frmReciepeArray: repc,
    };
    console.log('this is a testing data', data);
    debugger;

    let x = repc.length;
    let y;
    for (y = 0; y <= x - 1; y++) {
      console.log('hi');
      debugger;

     this.groups = _(repc[y].csvFile).groupBy('InvoiceNo').map((item, id) => ({
          Importer: id,
          TotalArea: _.sumBy(item, (item) => Number(item.Area)),
          count: _.countBy(item, 'InvoiceNo'),
          Quality: _.filter(item, (x) => count[x.InvoiceNo] > 1),
        })).value();

      console.log(this.groups);

      debugger;

      var arr = [{ n: '10' }, { n: '5' }, { n: 3 }, { n: 12 }];
      let gfg = _.sumBy(arr, 'n');
      console.log('sum of lodash', gfg);
    }
let arrayData ;
let j,k;
let quality:any=[];

for(j=0;j<=x-1;j++){

for(k=0;k<=repc[j].csvFile.length-1;k++){
  if(repc[j].csvFile[k].InvoiceNo=='RE-659'){
    console.log('here quality by invoice no.',repc[j].csvFile[k].Quality);

    if(repc[j].csvFile[k].Quality=='SARANG'){
    console.log('here desing by quality',repc[j].csvFile[k].Design);

    }
  }
}



  console.log('here length of csv file data',repc[j].csvFile.length);
}



  }

  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
