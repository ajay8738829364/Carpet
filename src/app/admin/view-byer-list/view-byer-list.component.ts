import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

export interface PeriodicElement {
  id: string;
  index: number;
  name:string;
  email:string;
  mobile:string;
  address:string;
  country:string;
  state:string;
  city:string;
  zip_code:string;
  bank_name:string;
  bank_branch:string;
  bank_contact:string;
  bank_email:string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-view-byer-list',
  templateUrl: './view-byer-list.component.html',
  styleUrls: ['./view-byer-list.component.css'],
})
export class ViewByerListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id','name',
    'email',
    'mobile',
    'address',
    'country',
    'state',
    'city',
    'zip_code',
    'bank_name',
    'bank_branch',
    'bank_contact',
    'bank_email'


  ];
  constructor(
    private _formBuilde: FormBuilder,
    private adminService: AdminMasterService,
    private _snackBar: SnackBarService
  ) {}
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
ngOnInit(): void {
  this.getAllBuyer();
}

  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  getAllBuyer() {
    ELEMENT_DATA.length = 0;

    this.adminService.getBuyerMaster().subscribe((res: any) => {
      console.log(res.buyerData);
      if (res.buyerData) {
        res.buyerData.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val._id,
            name:val.name,
            email:val.email,
            mobile:val.mobile,
            address:val.address,
            country:val.country,
            state:val.state,
            city:val.city,
            zip_code:val.zip_code,
            bank_name:val.bank_name,
            bank_branch:val.bank_branch,
            bank_contact:val.bank_contact,
            bank_email:val.bank_email
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit()
        return;
      }
    });
  }





}
