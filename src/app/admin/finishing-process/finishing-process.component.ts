import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HelperService } from 'src/app/helper/helper.service';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { AllselectlistService } from 'src/app/services/allselectlist.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

export interface PeriodicElement {
  index: number;
  id: string;
  job: string;
  quality: string;
  design: string;
  fromDate: string;
  toDate: string;
  rate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-finishing-process',
  templateUrl: './finishing-process.component.html',
  styleUrls: ['./finishing-process.component.css'],
})
export class FinishingProcessComponent implements OnInit {
  frmFinishingProcess!: FormGroup;

  job = new FormControl('');
  jobList: string[] = ['job 1', 'job 2'];

  qty = new FormControl('');

  exportQualityList: any[] = ['q1', 'q2'];

  design = new FormControl('');
  designList: any[] = ['d1', 'd2'];

  displayedColumns: string[] = [
    'id',
    'job',
    'quality',
    'design',
    'fromDate',
    'toDate',
    'rate',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  responsMessage: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  constructor(
    private _formBuilder: FormBuilder,
    private adminService: AdminMasterService,
    private _snackBar: SnackBarService,
    private _helper: HelperService,
    private _selectService: AllselectlistService
  ) {}
  ngOnInit(): void {
    this.frmFinishingProcess = this._formBuilder.group({
      jobName: [''],
      qty: [''],
      design: [''],
      fromDate: [''],
      toDate: [''],
      rate: [''],
    });

    this.getProductQuality();
  }

  getProductQuality() {
    this._selectService.getProductionQuality().subscribe((resp: any) => {
      console.log(resp.data);
      this.exportQualityList = resp.data;
    });
  }
  onDesign(data: any) {
    console.log(data);

    this._selectService.getDesignByQtyId(data).subscribe((resp: any) => {
      console.log(resp.data);

      this.designList = resp.data;
    });
  }
  setDesignValue(data: any) {
    this.design = data;
  }
  onSubmit() {
    const formData = this.frmFinishingProcess.value
// const d1 = this.frmFinishingProcess.value.toDate
    var data={
      jobName:formData.jobName,
// qty:formData.qty,
qty:'fh',
// design:formData.design,
design:'gdsftgf',
fromDate:formData.fromDate.toString().substring(0,16),
toDate:formData.toDate.toString().substring(0,16),
rate:formData.rate
    }


    this.adminService.addFinishingProcess(data).subscribe(
      (resp: any) => {
        debugger;
        this.responsMessage = resp.message;
        this._snackBar.openSnackBar(this.responsMessage, '');
      },
      (error) => {
        if (error.error.msg) {
          this.responsMessage = error.error.message;
        } else {
          this.responsMessage = global;
        }
        this._snackBar.openSnackBar(this.responsMessage, global.error);
      }
    );

    console.log(data);
  }
  // ','','','','','
}
