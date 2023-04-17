import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

export interface PeriodicElement {
  id: string;
  index: number;

  size_in_yard: string;
  khap_size: string;
  size_in_meter: string;
  code:string;
  type:string;
  yardTotal:string;
   sqrMeterTotal:string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-size-master',
  templateUrl: './size-master.component.html',
  styleUrls: ['./size-master.component.css'],
})
export class SizeMasterComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  responsMessage: any;
  frmSizeMaster!: FormGroup;
  constructor(
    private _formBuilde: FormBuilder,
    private adminService: AdminMasterService,
    private _snackBar: SnackBarService
  ) {}

  displayedColumns: string[] = [
    'id',
    'size_in_yard',
    'yardTotal',
    'khap_size',
    'size_in_meter',
'sqrMeterTotal',
    'type',
    'code',
'action'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  typeList: any = ['NR','RD','OV', 'OC'];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  ngOnInit(): void {
    this.frmSizeMaster = this._formBuilde.group({
      sizeInYard: [''],
      khapSize: [''],
      sizeInMeter: [''],
      type: [''],
      code: [''],
    });
    // ','','','code',''
    this.getAllSize();
  }

  onChange(event: any) {
    console.log(event);
  }

  addSize() {
    const formData = this.frmSizeMaster.value;

    const calcData = formData.sizeInYard.substring(0,formData.sizeInYard.indexOf('X')
    );

    const width1 = calcData.substring(0, formData.sizeInYard.indexOf('.'));
    const width2 = calcData.toString().split('.')[1];

    console.log('before ', width1, 'after ', width2);

    console.log(calcData);




    const calcData2 = formData.sizeInYard.toString().split("X")[1];
    const length1 = calcData2.toString().split(".")[0];
     const length2 = calcData2.toString().split('.')[1];


     const sizeInYaardCalc1 = (parseInt(width1) * 12 + parseInt(width2));


const sizeInYaardCalc2 = (parseInt(length1) * 12 + parseInt(length2));
console.log(sizeInYaardCalc1);
console.log(sizeInYaardCalc2);

const totalSizeInYaard= sizeInYaardCalc1*sizeInYaardCalc2/1296;
console.log(totalSizeInYaard);

    console.log('here this data is after * ', calcData2  ,'this data is before .',length1,   'this data is after .',length2   );
    var data = {

      sizeInYard: formData.sizeInYard,
      khapSize: formData.khapSize,
      sizeInMeter: formData.sizeInMeter,
      type: formData.type,
      code: formData.code,
      yardTotal:totalSizeInYaard.toString().substring(0,4),
       sqrMeterTotal:'cc'
    };
    debugger;
    this.adminService.sizeMaster(data).subscribe(
      (resp) => {
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
        console.log('data', data);
      }
    );
    this.getAllSize();
  }

  getAllSize() {
    ELEMENT_DATA.length = 0;

    this.adminService.getSizeMaster().subscribe((res: any) => {
      console.log(res.data);
      if (res.data) {
        res.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val._id,
            size_in_yard:val.sizeInYard,
            khap_size:val.khapSize,
            size_in_meter:val.sizeInMeter,
            code:val.code,
            type:val.type,
            yardTotal:val.yardTotal,
              sqrMeterTotal:val.sqrMeterTotal
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }
}
