import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

export interface PeriodicElement {
  id: number;
  materialName: string;
  count: string;
  desc: string;
  rate: string;
  hsnCode: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css'],
})
export class RawMaterialComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public frmRawMaterial!: FormGroup;

  responsMessage: any;

  constructor(private _formBuilder: FormBuilder, private adminService : AdminMasterService, private _snackBar : SnackBarService ) {}
  displayedColumns: string[] = [
    'id',
    'materialName',
    'count',
    'rate',
    'hsnCode',
    'desc',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  ngOnInit(): void {
    this.frmRawMaterial = this._formBuilder.group({
      material_name: [''],
      count: [''],
      hsn_code: [''],
      avg_rate: [''],
      description: [''],
    });
  }
  // "material_name":"abc",
	// "hsn_code":"abc",
	// "count":"abc",
	// "avg_rate":"100",
	// "description":"abc    dsadwdwdwdwqdd"

  addRawMaterial() {
    const formData = this.frmRawMaterial.value;
    var data = {
      material_name: formData.material_name,
      count: formData.count,
      hsn_code: formData.hsn_code,
      avg_rate: formData.avg_rate,
      description: formData.description,
    };
    console.log(data);
this.adminService.rawMaterial(data).subscribe((res)=>{
  debugger;
  console.log(res);

})

//     this.adminService.rawMaterial(data).subscribe(
//       (response:any) => {
//        debugger
//          this.responsMessage=response.msg;
//          this._snackBar.openSnackBar(this.responsMessage, '');
//         //  this.router.navigate(['/']);
//        },
//        (error: any) => {
//  debugger
//          if (error.error.msg) {
//            this.responsMessage = error.error.msg;
//          } else {
//            this.responsMessage =global.genricError;
//          }
//          this._snackBar.openSnackBar(this.responsMessage, global.error);
//          console.log('data', data);
//        }
//      );
  }
}
