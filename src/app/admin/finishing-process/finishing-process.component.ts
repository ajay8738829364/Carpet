import { DatePipe } from '@angular/common';
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
  providers: [DatePipe],
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
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  responsMessage: any;

  isUpdate: boolean = false;
  finishingId: any;

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
    private _selectService: AllselectlistService,
    private _datePipe: DatePipe
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
    this.getFinishingProcessList();
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
    // this.design = data;
  }
  onSubmit() {
    const formData = this.frmFinishingProcess.value;

    var data = {
      jobName: formData.jobName,

      qty: formData.qty,

      design: formData.design,
      fromDate: formData.fromDate,
      toDate: formData.toDate,
      // fromDate: this._datePipe.transform(formData.fromDate,'MM/dd/yyyy'),
      // toDate: this._datePipe.transform(formData.toDate,'MM/dd/yyyy'),
      rate: formData.rate,
    };

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
  getFinishingProcessList() {
    ELEMENT_DATA.length = 0;
    this.adminService.getFinishingProcess().subscribe((resp: any) => {
      console.log(resp.data);

      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,
            job: val.jobName,
            quality: val.qty,
            design: val.design,
            fromDate: val.fromDate,
            toDate: val.toDate,
            rate: val.rate,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

  editFinishingProcess(_id: any) {
    this.finishingId = _id;
    this.isUpdate = true;
    this.adminService.getFinishingById(_id).subscribe((resp: any) => {
      console.log(resp.data);
      debugger;
      // this.frmFinishingProcess.patchValue(resp.data);

            this.frmFinishingProcess.patchValue({
              jobName:resp.data[0].jobName,
      qty:resp.data[0].qty,
      design:resp.data[0].design,
      fromDate:resp.data[0].fromDate,
      toDate:resp.data[0].toDate,
      rate:resp.data[0].rate
            });
      //this.frmFinishingProcess.value.get('toDate').patchValue(this.formatDate(new Date()));
    });
  }

  updateFinishing() {
    const formData = this.frmFinishingProcess.value;

    var data = {
      jobName: formData.jobName,

      qty: formData.qty,

      design: formData.design,
      fromDate: formData.fromDate,
      toDate: formData.toDate,
      // fromDate: this._datePipe.transform(formData.fromDate, 'MM/dd/yyyy'),
      // toDate: this._datePipe.transform(formData.toDate, 'MM/dd/yyyy'),
      rate: formData.rate,
    };

    this.adminService.updateFinishingProcess(this.finishingId, data).subscribe(
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

  private formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
