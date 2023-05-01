import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { AllselectlistService } from 'src/app/services/allselectlist.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
import { ActivatedRoute } from '@angular/router';
export interface PeriodicElement {
  id: string;
  index: number;
  groupName: string;
  materialName: string;
  count: string;
  partyName: string;
  gstNo: string;
  address: string;
  contactNo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-purchaser-details',
  templateUrl: './purchaser-details.component.html',
  styleUrls: ['./purchaser-details.component.css'],
})
export class PurchaserDetailsComponent implements OnInit {
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  preferredCountries: CountryISO[] = [];

  displayedColumns: string[] = [
    'id',
    'groupName',
    'materialName',
    'count',
    'partyName',
    'gstNo',
    'address',
    'contactNo',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  responsMessage: any;
  public frmPurchaserDetails!: FormGroup;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  group = new FormControl('');

  groupList: any;
  count = new FormControl('');
  groupName?: string;
  countList: any[] = [];

  material_name = new FormControl('');

  materialList: any[] = [];

  purchaseId: any;

  isUpdate: boolean = false;

  constructor(
    private _serviceList: AllselectlistService,
    private _service: AdminMasterService,
    private _snakBarService: SnackBarService,
    private _formBuilder: FormBuilder,
    private _activatedRouter: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  onMaterial(data: any) {
    debugger;

    this._serviceList.getCountList(data).subscribe((res: any) => {
      console.log(res);

      this.countList = res.data;

    });

    console.log('here my on change event  material ', data);
    this.material_name = data;
  }
  onCount(data: any) {
    console.log(data);
    this.count = data;
  }

  onGroup(data: any) {
    this.group = data;
  }
  // groupName','materialName','count','partyName','gstNo','address','contactNo
  ngOnInit(): void {
    this.frmPurchaserDetails = this._formBuilder.group({
      groupName: [''],
      materialName: [''],
      count: [''],
      partyName: [''],
      gstNo: [''],
      address: [''],
      contactNo: [''],
    });

    this.getGroup();
    this.getMaterial();
    this.getRawMaterial();



    // this.purchaseId = this._activatedRouter.snapshot.paramMap.get('id') || '';
    // if (this.purchaseId != '') {
    //   this.getPurchaseDetailById(this.purchaseId);
    //   this.isUpdate = true;
    // }
  }

  getMaterial() {
    this._serviceList.getAllMaterialItem().subscribe((res: any) => {
      console.log(res.data);
      this.materialList = res.data;
    });
  }

  getGroup() {
    this._serviceList.getGroupList().subscribe((res: any) => {
      console.log(res.data);

      this.groupList = res.data;
      console.log(res);

      console.log(this.groupList);
    });
  }

  ///////////////////////////
  //////////
  /////// here code for ngintlInput
  ////

  addPurchaserDetails() {
    const formData = this.frmPurchaserDetails.value;
    const telData = this.frmPurchaserDetails.value.contactNo;
    console.log(telData.internationalNumber);
    var data = {
      groupName: formData.groupName,
      materialName: formData.materialName,
      count: formData.count,
      partyName: formData.partyName,
      gstNo: formData.gstNo,
      address: formData.address,
      contactNo: telData.internationalNumber,
    };
    console.log(this.frmPurchaserDetails.value);

    console.log(data);

    this._service.addPurchaseAccount(data).subscribe(
      (res: any) => {
        this.responsMessage = res.message;
        this._snakBarService.openSnackBar(this.responsMessage, '');
      },
      (error) => {
        if (error.error.msg) {
          this.responsMessage = error.error.message;
        } else {
          this.responsMessage = global;
        }
        this._snakBarService.openSnackBar(this.responsMessage, global.error);
      }
    );

    this.getRawMaterial();
  }

  getRawMaterial() {
    ELEMENT_DATA.length = 0;
    this._service.getPurchaseLedger().subscribe((resp: any) => {
      debugger;
      console.log(resp);
      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,

            groupName: val.groupName,
            materialName: val.materialName,
            count: val.count,
            partyName: val.partyName,
            gstNo: val.gstNo,
            address: val.address,
            contactNo: val.contactNo,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

  getPurchaseDetailById(_purchaseId: any) {

    this.isUpdate = true;
    this.purchaseId=_purchaseId;

    this._service.getPurchaseLedgerById(_purchaseId).subscribe((resp: any) => {
      console.log(resp.data);

      this.onMaterial(resp.data.materialName)


      this.frmPurchaserDetails.patchValue(resp.data);
    });
  }

  updatePurchaseLedger() {
    debugger
    const formData = this.frmPurchaserDetails.value;
    // const telData =  this.frmPurchaserDetails.value.contactNo;
    // console.log(telData.internationalNumber);
    var data = {
      groupName: formData.groupName,
      materialName: formData.materialName,
      count: formData.count,
      partyName: formData.partyName,
      gstNo: formData.gstNo,
      address: formData.address,
      contactNo: formData.contactNo,
    };
    console.log(this.frmPurchaserDetails.value);

    console.log(data);
    this._service.updatePurchaseLedger(this.purchaseId, data).subscribe(
      (res: any) => {
        this.responsMessage = res.message;
        this._snakBarService.openSnackBar(this.responsMessage, '');
      },
      (error) => {
        if (error.error.msg) {
          this.responsMessage = error.error.message;
        } else {
          this.responsMessage = global;
        }
        this._snakBarService.openSnackBar(this.responsMessage, global.error);
      }
    );
  }
}
