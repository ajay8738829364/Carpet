import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { AllselectlistService } from 'src/app/services/allselectlist.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

/// here i am use csv file code
import * as XLSX from 'xlsx';

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

  currencyList: any = ['Rupee ₹ ', 'Dollar $ ', 'Euro €', 'Ruble ₽'];

  selectImagePan(event: any) {}
  csvFileData: any;
  constructor(
    private fb: FormBuilder,
    private _service: AdminMasterService,
    private _selectList: AllselectlistService,
    private _matSnack: SnackBarService
  ) {}

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
      this.excelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
      console.log(this.excelData);
      this.exlsArr.push(this.excelData);

      if (this.exlsArr >= 0) {
        ++this.i;
      }
    };
  }

  containerDispatch() {
    //console.log(this.frmContainerDispatch.value);
    const formData = this.frmContainerDispatch.value;
    let i = 0;

   const length = formData.frmReciepeArray.length;
   var repc :any=[];
    for(i=0; i<=length-1; i++){
      const receipeFormData = formData.frmReciepeArray[i];
      debugger;
     repc.push({
      importer_name: receipeFormData.importerName,
      invoiceNo: receipeFormData.invoiceNo,
      invoiceAmount: receipeFormData.invoiceAmount,
      invoicePdf: receipeFormData.invoicePdf,
      blCopyPdf: receipeFormData.blCopyPdf,
      csvFile: this.exlsArr[i],
    })
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
    // console.log(this.exlsArr);
  }
}
