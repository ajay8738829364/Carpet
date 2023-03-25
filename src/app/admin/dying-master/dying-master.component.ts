import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { HttpClient } from '@angular/common/http';
import { global } from 'src/app/shared/global';
export interface PeriodicElement {
  id: string;
  index: number;

  material_name: string;
  count: string;
  shead_name: string;
  color_code: string;
  dye_name: string;
  purchaser_name: string;
  weight: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-dying-master',
  templateUrl: './dying-master.component.html',
  styleUrls: ['./dying-master.component.css'],
})
export class DyingMasterComponent implements OnInit {
  public toggle: boolean = false;
  public frmDyingMaster!: FormGroup;
  count = new FormControl('');

  countList: string[] = ['count 1', 'count 2'];

  material_name = new FormControl('');

  materialList: string[] = ['material 1', 'material 2'];

  shead_name = new FormControl('');

  shaedList: string[] = ['count 1', 'count 2'];
  responsMessage: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: AdminMasterService,
    private snacBarService: SnackBarService,
    private http: HttpClient
  ) {}

  public arrayColors: any = {
    color2: '#e920e9',
  };

  public color2: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'material_name',
    'count',
    'shead_name',
    'color_code',
    'dye_name',
    'purchaser_name',
    'weight',
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
    this.frmDyingMaster = this._formBuilder.group({
      material_name: [''],
      count: [''],
      shead_name: [''],

      color_code: [''],
      dye_name: [''],
      purchaser_name: [''],
      weight: [''],
    });

    this.getAllDying();
  }

  onMaterial(data: any) {
    console.log(data);
    this.material_name = data;
  }
  onCount(data: any) {
    console.log(data);
    this.count = data;
  }
  onShead(data: any) {
    console.log(data);
    this.shead_name = data;
  }
  addDyingMaster() {
    debugger;
    const formData = this.frmDyingMaster.value;
    var data = {
      material_name: formData.material_name,
      count: formData.count,
      shead_name: formData.shead_name,

      color_code: this.color2,
      dye_name: formData.dye_name,
      purchaser_name: formData.purchaser_name,
      weight: formData.weight,
    };

    debugger;
    this._service.dyingMaster(data).subscribe(
      (resp: any) => {
        this.responsMessage = resp.message;
        this.snacBarService.openSnackBar(this.responsMessage, '');
      },
      (error) => {
        if (error.error.msg) {
          this.responsMessage = error.error.message;
        } else {
          this.responsMessage = global.genricError;
        }
        this.snacBarService.openSnackBar(this.responsMessage, global.error);
        console.log('data', data);
      }
    );
    this.getAllDying();

    console.log(data);
  }

  getAllDying() {
    ELEMENT_DATA.length = 0;
debugger

this._service.getDyingMaster().subscribe((resp:any)=>{
  debugger;
  console.log(resp);
  if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,
            material_name: val.material_name,
            count: val.count,
            shead_name: val.shead_name,
            color_code: val.color_code,
            dye_name: val.dye_name,
            purchaser_name: val.purchaser_name,
            weight: val.weight,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
})


    // this._service.getDyingMaster().subscribe((res: any) => {
    //   console.log('ffff', res.data);
    //   if (res.data) {
    //     res.data.map((val: any, ind: number) => {
    //       ELEMENT_DATA.push({
    //         index: ind + 1,
    //         id: val.id,
    //         material_name: val.material_name,
    //         count: val.count,
    //         shead_name: val.shead_name,
    //         color_code: val.color_code,
    //         dye_name: val.dye_name,
    //         purchaser_name: val.purchaser_name,
    //         weight: val.weight,
    //       });
    //     });

    //     this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    //     this.ngAfterViewInit();
    //     return;
    //   }
    // });
  }
}
