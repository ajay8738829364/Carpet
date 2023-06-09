import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { KotiService } from 'src/app/services/koti.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

export interface PeriodicElement {
  index: number;
  id: string;
  importer_name: string;
  importer_code: string;
  address: string;
  country: string;
  contact_no: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-koti-master',
  templateUrl: './koti-master.component.html',
  styleUrls: ['./koti-master.component.css'],
})
export class KotiMasterComponent implements OnInit {
  frmImporterAddress!: FormGroup;
  responsMessage: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'importer_name',
    'importer_code',
    'address',
    'country',
    'contact_no',
    'email',
    'action',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  isUpdate: boolean = false;

  importerId: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: KotiService,
    private _matSnack: SnackBarService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  ngOnInit(): void {
    this.frmImporterAddress = this._formBuilder.group({
      importer_name: ['', Validators.required],
      importer_code: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      contact_no: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.getImporterDetails();
  }

  addImporterAddress() {
    console.log(this.frmImporterAddress.value);

    const data = this.frmImporterAddress.value;

    this._service.importerAddress(data).subscribe(
      (resp: any) => {
        console.log('data', resp.data);
        this.responsMessage = resp.message;
        this._matSnack.openSnackBar(this.responsMessage, '');
      },
      (error) => {
        if (error.error.msg) {
          this.responsMessage = error.error.message;
        } else {
          this.responsMessage = global;
        }
        this._matSnack.openSnackBar(this.responsMessage, global.error);
        console.log('data', data);
      }
    );
  }

  getImporterDetails() {
    debugger
    this._service.getImporterAddress().subscribe((resp: any) => {
      console.log('data', resp);

      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val._id,
            importer_name: val.importer_name,
            importer_code: val.importer_code,
            address: val.address,
            country: val.country,
            contact_no: val.contact_no,
            email: val.email,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

  edit(id: any) {
    console.log(id);
debugger;
    this.isUpdate = true;

    this.importerId = id;
    this._service.getImporterById(id).subscribe((resp: any) => {
      console.log(resp.data[0]);
debugger
      this.frmImporterAddress.patchValue(resp.data[0]);
    });
  }


  updateImporter(){
debugger
    const data = this.frmImporterAddress.value;
    this._service.updateImporter(data,this.importerId).subscribe((resp:any)=>{
      console.log(resp);
      this.responsMessage = resp.message;
      this._matSnack.openSnackBar(this.responsMessage, '');
    },
    (error) => {
      if (error.error.msg) {
        this.responsMessage = error.error.message;
      } else {
        this.responsMessage = global;
      }
      this._matSnack.openSnackBar(this.responsMessage, global.error);
      console.log('data', data);
    }
    );
  }

  deleteImporterAddress(_id:any){
    this._service.deleteImporterAddress(_id).subscribe((resp:any)=>{
      console.log(resp.data);
      this.responsMessage = resp.message;
      this._matSnack.openSnackBar(this.responsMessage, '');
    },
    (error) => {
      if (error.error.msg) {
        this.responsMessage = error.error.message;
      } else {
        this.responsMessage = global;
      }
      this._matSnack.openSnackBar(this.responsMessage, global.error);

    }
    )
  }
}
