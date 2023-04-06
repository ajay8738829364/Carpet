import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

export interface PeriodicElement {
  id: string;
  index: number;
  group:string;
  address:string;
  country:string;
  state:string;
  city:string;
  zipCode:string;
  aadharNo:string;
  aadharImage:string;
  panNo:string;
  panImage:string;
  email:string;
  esicNo:string;
  epfoNo:string;
  password:string;

}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {


  displayedColumns: string[] = ['id','group','address','country','state','city','zipCode','aadharNo','aadharImage','panNo','panImage','email','esicNo','epfoNo','password'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  group =new FormControl('');

  groupList : string [] = ['STAFF','VIEWER','FINISHER','OTHERS 1','OTHERS 2'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }


  onGroup(data:any){
    this.group=data;

  }


  frmEmployeeDetails !: FormGroup;


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

  ngOnInit(): void {
    this.frmEmployeeDetails = this._formBuilder.group({
      groupName: [''],
      name: [''],
      address: [''],
      state: [''],
      city: [''],
      country: [''],
      zipCode: [''],
      adharNo: [''],
      adharImage: [''],
      panNo: [''],
      panImage: [''],
      epfoNo:[''],
      epfoSheet:[''],
      esicNo:[''],
      esicSheet:[''],
      email:[''],
      password:['']
    });
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



addEmployeeDetails(){

  console.log(this.frmEmployeeDetails.value);
  const formData=this.frmEmployeeDetails.value;


  var data ={
    groupName:formData.groupName,
    name:formData.name,
    address:formData.address,
    state:formData.state,
    city:formData.city,
    country:formData.country,
    zipCode:formData.zipCode,
    adharNo:formData.adharNo,
    adharImage:formData.adharImage,
    panNo:formData.panNo,
    panImage:formData.panImage,
    epfoNo:formData.epfoNo,
    epfoSheet:formData.epfoSheet,
    esicNo:formData.esicNo,
    esicSheet:formData.esicSheet,
    email:formData.email,
    password:formData.password
  }




  // this._service.quality(data).subscribe(
  //   (resp: any) => {
  //     this.responsMessage = resp.message;

  //     this._snackBar.openSnackBar(this.responsMessage, '');
  //   },
  //   (error) => {
  //     if (error.error.msg) {
  //       this.responsMessage = error.error.message;
  //     } else {
  //       this.responsMessage = global.genricError;
  //     }
  //     this._snackBar.openSnackBar(this.responsMessage, global.error);
  //   }
  // );
  }
}

