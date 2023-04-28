import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

export interface PeriodicElement {
  id: string;
  index: number;
  branchName: string;
  branchCode: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-manage-branch',
  templateUrl: './manage-branch.component.html',
  styleUrls: ['./manage-branch.component.css'],
})
export class ManageBranchComponent implements OnInit {
  frmBranch!: FormGroup;
  responsMessage: any;

  displayedColumns: string[] = ['id', 'branchName', 'branchCode'];
  dataSource =new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _service: AdminMasterService,
    private _formBuilder: FormBuilder,
    private _snack: SnackBarService
  ) {}

  ngOnInit(): void {
    this.frmBranch = this._formBuilder.group({
      branch_name: [''],
      branch_code: [''],
    });

    this.getBranchList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  addBranch() {
    debugger;
    const formData = this.frmBranch.value;
    var data = {
      branch_name: formData.branch_name,
      branch_code: formData.branch_code,
    };

    this._service.addBranch(data).subscribe(
      (resp: any) => {
        console.log(resp.data);
        this.responsMessage = resp.message;
        this._snack.openSnackBar(this.responsMessage, '');
      },
      (error) => {
        if (error.error.msg) {
          this.responsMessage = error.error.message;
        } else {
          this.responsMessage = global.genricError;
        }
        this._snack.openSnackBar(this.responsMessage, global.error);
        console.log('data', data);
      }
    );
  }


  getBranchList(){
    ELEMENT_DATA.length = 0;

    this._service.getBranch().subscribe((res: any) => {
      console.log(res.data);
      if (res.data) {
        res.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,
            branchName:val.branch_name,
            branchCode:val.branch_code
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }
}
