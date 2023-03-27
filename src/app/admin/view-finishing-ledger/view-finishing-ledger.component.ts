import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';
export interface PeriodicElement {
  id: string;
  index: number;
  group_name:string;
address:string;
state:string;
zip_code:string;
adhar_no:string;
adhar_image:string;
pan_no:string;
pan_image:string;
contact:string;
email:string;
}

const ELEMENT_DATA: PeriodicElement[]=[];
@Component({
  selector: 'app-view-finishing-ledger',
  templateUrl: './view-finishing-ledger.component.html',
  styleUrls: ['./view-finishing-ledger.component.css']
})
export class ViewFinishingLedgerComponent implements OnInit {




  displayedColumns: string[] = ['id','group_name','address','state','zip_code','adhar_no','adhar_image','pan_no','pan_image','contact','email'];
  // dataSource = ELEMENT_DATA;

  img = global.imageApiUrl;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
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

    this.adminService.getFinisherLedgerData().subscribe((res: any) => {
      console.log(res.data);
      if (res.data) {
        res.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,
            group_name:val.group_name,
            address:val.address,
            state:val.state,
            zip_code:val.zip_code,
            adhar_no:val.adhar_no,
            adhar_image:val.adhar_image,
            pan_no:val.pan_no,
            pan_image:val.pan_image,
            contact:val.contact,
            email:val.email
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit()
        return;
      }
    });
  }

}
