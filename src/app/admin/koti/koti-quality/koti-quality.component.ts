import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { codingDetial } from 'src/app/model/codingDetails';
import { KotiService } from 'src/app/services/koti.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

export interface PeriodicElement {
  index: number;
  id: string;
  design: string;
  colour: string;
  size: string;
  design_code: string;
  colour_code: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-koti-quality',
  templateUrl: './koti-quality.component.html',
  styleUrls: ['./koti-quality.component.css'],
})
export class KotiQualityComponent implements OnInit {
  frmKotiQuality!: FormGroup;

  design = new FormControl();

  designList: any[] = [];
  colour = new FormControl();
  colourList: any[] = [];

  size = new FormControl();
  sizeList: any[] = [];
  responsMessage: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'design',
    'colour',
    'size',
    'design_code',
    'colour_code',
    'action',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  isUpdate: boolean = false;

  codingDetails :codingDetial[]=[]
  qualityId: any;
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
    this.frmKotiQuality = this._formBuilder.group({
      design: ['', Validators.required],
      colour: ['', Validators.required],
      size: ['', Validators.required],
      design_code: ['', Validators.required],
      colour_code: ['', Validators.required],
    });

    this.getDesign();
    this.getColour();
    this.getSize();
    this.getCodingDetails();
  }

  getDesign() {
    this._service.getDesign().subscribe((resp: any) => {
      console.log(resp.data);
      this.designList = resp.data;
    });
  }

  getColour() {
    this._service.getColour().subscribe((resp: any) => {
      console.log(resp.data);
      this.colourList = resp.data;
    });
  }

  getSize() {
    this._service.getSize().subscribe((resp: any) => {
      console.log(resp.data);
      this.sizeList = resp.data;
    });
  }

  addKotiQuality() {
    const data = this.frmKotiQuality.value;
    console.log(data);

    this._service.addCodingDetail(data).subscribe(
      (resp: any) => {
        console.log(resp);
       this._service.codingDetails=resp;
      //  this.dataSource.data=resp;
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

  getCodingDetails() {
    this._service.getCodingDetails().subscribe((resp: any) => {
      console.log(resp.data);

      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,
            design: val.design,
            colour: val.colour,
            size: val.size,
            design_code: val.design_code,
            colour_code: val.colour_code,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

  edit(_id: any) {
    this.isUpdate = true;

    this.qualityId = _id;
    this._service.getCodeingDetailById(_id).subscribe((resp: any) => {
      console.log(resp.data);

      this.frmKotiQuality.patchValue(resp.data);
    });
  }

  updateQuality() {
    const data = this.frmKotiQuality.value;

    this._service.updateCodingDetail(data, this.qualityId).subscribe(
      (resp: any) => {
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

  deleteQuality(_id: any) {
    this._service.deleteQuality(_id).subscribe(
      (resp: any) => {
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
    );
  }
}
