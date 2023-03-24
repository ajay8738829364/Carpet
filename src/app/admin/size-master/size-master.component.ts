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
  khap_size:string;
  size_in_meter:string;
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
   'id','size_in_yard','khap_size','size_in_meter'
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
    this.frmSizeMaster = this._formBuilde.group({
      sizeInYard: [''],
      khapSize: [''],
      sizeInMeter: [''],
    });

    this.getAllSize();
  }

  addSize() {
    const formData = this.frmSizeMaster.value;
    var data = {
      size_in_yard: formData.sizeInYard,
      khap_size: formData.khapSize,
      size_in_meter: formData.sizeInMeter,
    };

    this.adminService.sizeMaster(data).subscribe(
      (resp) => {
        this.responsMessage = resp.message;
        this._snackBar.openSnackBar(this.responsMessage, '');
      },
      (error) => {
        if (error.error.msg) {
          this.responsMessage = error.error.message;
        } else {
          this.responsMessage = global.genricError
        }
        this._snackBar.openSnackBar(this.responsMessage, global.error);
        console.log('data', data);
      }
    );
  }

  getAllSize(){
    ELEMENT_DATA.length = 0;

    this.adminService.getSizeMaster().subscribe((resp)=>{
      console.log(resp);


      // if(resp){
      //   resp.data.map((val : any, ind:any)=>{
      //     ELEMENT_DATA.push({
      //                   index: ind + 1,
      //                   id: val.id,
      //                   size_in_yard: val.size_in_yard,
      //                   khap_size:val.khap_size,
      //                   size_in_meter:val.size_in_meter



      //                 });
      //   });
      // }
    });
  }
  // getAllSubject() {
  //   ELEMENT_DATA.length = 0;

  //   this.service.getAdminMethod(this.helper.apiPath.subject)
  //     .subscribe(res => {
  //       console.log(res)

  //       if (res.status) {
  //         this.subjectList = res.data;

  //         res.data.map((val: any, ind: number) => {
  //
  //           ELEMENT_DATA.push({
  //             index: ind + 1,
  //             id: val._id,
  //             Name: val.name,
  //             Image: this.helper.apiPath.baseUrl + val.img,
  //             Courses: courses,
  //             Status: val.isActive == 1 ? "Active" : "Not Active"



  //           });
  //         })

  //         this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  //         this.ngAfterViewInit()



  //         return
  //       }
  //       this.helper.showToast(res.message);

  //     }, err => {
  //       this.helper.showToast('Somthing went wrong.: ' + err, 'danger');
  //     })
  // }

}
