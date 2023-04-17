import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

export interface PeriodicElement {
  id: string;
  index: number;
  materialName: string;
  count: string;
  desc: string;
  colourCode: string;
  hsnCode: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css'],
})
export class RawMaterialComponent implements OnInit {


  public arrayColors: any = {

    color2: '#e920e9',

  };


  items= new FormControl('');
  itemsList : string[]=['item 12','item 3'];



  public color2: string = '';


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public frmRawMaterial!: FormGroup;

  responsMessage: any;

  constructor(
    private _formBuilder: FormBuilder,
    private adminService: AdminMasterService,
    private _snackBar: SnackBarService
  ) {}
  displayedColumns: string[] = [
    'id',
    'materialName',
    'count',
    'colourCode',
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
      colourCode: [''],
      description: [''],
    });

    this.getMaterial();
  }


  addRawMaterial() {
    const formData = this.frmRawMaterial.value;
    var data = {
      material_name: formData.material_name,
      count: formData.count,
      hsn_code: formData.hsn_code,
      colourCode: formData.colourCode,
      description: formData.description,
    };
    console.log(data);
    this.adminService.rawMaterial(data).subscribe(
            (response:any) => {
             debugger
               this.responsMessage=response.message;
               this._snackBar.openSnackBar(this.responsMessage, '');
              //  this.router.navigate(['/']);
             },
             (error: any) => {
       debugger
               if (error.error.message) {
                 this.responsMessage = error.error.message;
               } else {
                 this.responsMessage =global.genricError;
               }
               this._snackBar.openSnackBar(this.responsMessage, global.error);
               console.log('data', data);
             }
           );
           this.getMaterial();

  }

  getMaterial() {
    ELEMENT_DATA.length = 0;

    this.adminService.getRawMaterial().subscribe((res: any) => {
      console.log(res.data);
      if (res.data) {
        res.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,
            materialName: val.material_name,
            count: val.count,
            desc: val.description,
            colourCode: val.colourCode,
            hsnCode: val.hsn_code,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }
}
