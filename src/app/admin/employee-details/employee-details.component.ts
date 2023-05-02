import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { HelperService } from 'src/app/helper/helper.service';
import { City } from 'src/app/model/city';
import { Country } from 'src/app/model/country';
import { State } from 'src/app/model/state';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { CountryStateCitysService } from 'src/app/services/country-state-citys.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';


import * as $ from 'jquery';

export interface PeriodicElement {
  id: string;
  index: number;
  group: string;
  address: string;
  country: string;
  // state: string;
  // city: string;
  // zipCode: string;
  aadharNo: string;
  aadharImage: string;
  panNo: string;
  panImage: string;
  email: string;
  esicNo: string;
  epfoNo: string;
  esicSheet: string;
  epfoSheet: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'group',
    'address',
    'country',
    // 'state',
    // 'city',
    // 'zipCode',
    'aadharNo',
    'aadharImage',
    'panNo',
    'panImage',
    'email',
    'esicNo',
    'epfoNo',
    'esicSheet',
    'epfoSheet',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  group = new FormControl('');

  groupList: string[] = ['STAFF', 'VIEWER', 'FINISHER', 'OTHERS 1', 'OTHERS 2'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  onGroup(data: any) {
    this.group = data;
  }

  frmEmployeeDetails!: FormGroup;

  responsMessage: any;

  isUpdate: boolean = false;
  empID: any;
  // country = new FormControl('');

  // countryList: any;

  // state = new FormControl('');

  adharFile!: File;
  panFile!: File;
  epfoFile!: File;
  esicFile!: File;

  // stateList: any;

  // city = new FormControl('');

  // cityList: any;
  constructor(
    private _formBuilder: FormBuilder,
    private adminService: AdminMasterService,
    private _snackBar: SnackBarService,
    private _helper: HelperService,
    private countrystatecityService: CountryStateCitysService
  ) {}

  ngOnInit(): void {
    this.frmEmployeeDetails = this._formBuilder.group({
      groupName: [''],
      name: [''],
      address: [''],
      // state: [''],
      // city: [''],
      // zipCode: [''],
      country: [''],

      adharNo: [''],
      adharImage: [''],
      panNo: [''],
      panImage: [''],
      epfoNo: [''],
      epfoSheet: [''],
      esicNo: [''],
      esicSheet: [''],
      email: [''],
      password: [''],
    });

    this.getEmployeeDetails();

    // this.onCountry();
  }

  // onCountry() {
  //   debugger;
  //   this.countrystatecityService.getCountry().subscribe((data: any) => {
  //     this.countryList = data.data;

  //     console.log('Countries fetched', this.countryList);
  //   });
  // }
  // countryById(event: any) {
  //   this.countrystatecityService.getState(event).subscribe((res: any) => {
  //     this.stateList = res.data;
  //     console.log('state by country id ', this.stateList);
  //   });
  // }
  // onStateById(data: any) {
  //   debugger;
  //   this.countrystatecityService.getCity(data).subscribe((res: any) => {
  //     console.log(res);
  //     this.cityList = res.data;
  //   });
  // }

  selectImageAdhar(event: any) {
    this.adharFile = event.target.files[0];
    console.log(this.adharFile);
  }
  selectImagePan(event: any) {
    this.panFile = event.target.files[0];
  }

  selectImageEpfo(event: any) {
    this.epfoFile = event.target.files[0];
  }
  selectImageEsic(event: any) {
    this.esicFile = event.target.files[0];
  }
  addEmployeeDetails() {
    console.log(this.frmEmployeeDetails.value);
    const formData = this.frmEmployeeDetails.value;

    var data = {
      groupName: formData.groupName,
      name: formData.name,
      address: formData.address,

      country: formData.country,

      adharNo: formData.adharNo,

      panNo: formData.panNo,

      epfoNo: formData.epfoNo,

      esicNo: formData.esicNo,

      email: formData.email,
      password: formData.password,
    };

    this.adminService
      .addContractor(
        data,
        this.adharFile,
        this.panFile,
        this.epfoFile,
        this.esicFile
      )

      .subscribe(
        (resp: any) => {
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

  getEmployeeDetails() {
    ELEMENT_DATA.length = 0;
    this.adminService.getContractor().subscribe((resp: any) => {
      debugger;
      console.log(resp);
      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,

            group: val.groupName,
            address: val.address,
            country: val.country,
            // state:val.states_name,
            // city:val.cities_name,
            // zipCode: val.zipCode,
            aadharNo: val.adharNo,
            aadharImage:
              this._helper.apiPath.baseUrl +
              '/contractotStaffFinishing_ledger/' +
              val.adharImage,
            panNo: val.panNo,
            panImage:
              this._helper.apiPath.baseUrl +
              '/contractotStaffFinishing_ledger/' +
              val.panImage,
            email: val.email,
            esicNo: val.esicNo,
            epfoNo: val.epfoNo,
            esicSheet:
              this._helper.apiPath.baseUrl +
              '/contractotStaffFinishing_ledger/' +
              val.esicSheet,
            epfoSheet:
              this._helper.apiPath.baseUrl +
              '/contractotStaffFinishing_ledger/' +
              val.epfoSheet,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

  getEmployeeDetailById(_id: any) {
    this.isUpdate = true;
    this.empID = _id;
    debugger;
    this.adminService.getContractorByID(_id).subscribe((resp: any) => {
      console.log(resp.data);

      // this.frmEmployeeDetails.patchValue(resp.data);
      const formData = resp.data;

      this.frmEmployeeDetails = this._formBuilder.group({
        groupName: [formData.groupName],
        name: [formData.name],
        address: [formData.address],

        country: [formData.country],

        adharNo: [formData.adharNo],
        adharImage: [],
        panNo: [formData.panNo],
        panImage: [''],
        epfoNo: [formData.epfoNo],
        epfoSheet: [''],
        esicNo: [formData.esicNo],
        esicSheet: [''],
        email: [formData.email],
        password: [formData.password],
      });
    });
  }


  updateEmployee(){
    debugger
    console.log(this.frmEmployeeDetails.value);
    const formData = this.frmEmployeeDetails.value;

    var data = {
      groupName: formData.groupName,
      name: formData.name,
      address: formData.address,

      country: formData.country,

      adharNo: formData.adharNo,

      panNo: formData.panNo,

      epfoNo: formData.epfoNo,

      esicNo: formData.esicNo,

      email: formData.email,
      password: formData.password,
    };

    this.adminService
      .updateContractor(this.empID,
        data,
        this.adharFile,
        this.panFile,
        this.epfoFile,
        this.esicFile
      )

      .subscribe(
        (resp: any) => {
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
