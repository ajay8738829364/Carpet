import { Component, ViewChild } from '@angular/core';
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
  design: string;
  colour: string;
  size: string;
  file: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-quality-design',
  templateUrl: './quality-design.component.html',
  styleUrls: ['./quality-design.component.css'],
})
export class QualityDesignComponent {
  frmQualityDesign!: FormGroup;
  responsMessage: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'design',
    'colour',
    'size',
    'file',
    'action',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  isUpdate: boolean = false;
  file!: File;

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

  selectImage(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
  ngOnInit(): void {
    this.frmQualityDesign = this._formBuilder.group({
      design: ['', Validators.required],
      colour: ['', Validators.required],
      size: ['', Validators.required],
      file: ['', Validators.required],
    });

    this.getQualityDesignDetails();
  }

  addQualityDesign() {
    // console.log(this.frmQualityDesign.value);
    debugger;
    const data = this.frmQualityDesign.value;

    const formData={
      design:data.design,
      colour:data.colour,
      size:data.size
    }

    this._service.qualityDesign(formData, this.file).subscribe(
      (resp: any) => {
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
        // console.log('data', data);
      }
    );
  }

  getQualityDesignDetails() {
    this._service.getQualityDesign().subscribe((resp: any) => {
      console.log('data', resp);

      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,
            design: val.design,
            colour: val.colour,
            size: val.size,
            file: val.file,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }
}
