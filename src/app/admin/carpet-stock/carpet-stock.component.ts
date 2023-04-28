import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { AllselectlistService } from 'src/app/services/allselectlist.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';



export interface PeriodicElement {
  id: string;
  index: number;
  qty: string;
  design: string;
  groundColour: string;
  borderColour: string;
  carpetNo: string;
  branchCode: string;
  size: string;
  area: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-carpet-stock',
  templateUrl: './carpet-stock.component.html',
  styleUrls: ['./carpet-stock.component.css'],
})
export class CarpetStockComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'qty',
    'design',
    'groundColour',
    'borderColour',
    'carpetNo',
    'branchCode',
    'size',
    'area',
    'action',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  qualityList: any;

  designList: any;
  responsMessage: any;

  groundColours: any;
  borderColours: any;

  isUpdate: boolean = false;

  sizeList: any;

  frmCarpetStock!: FormGroup;
  designID: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: AdminMasterService,
    private _selectListService: AllselectlistService,
    private _snackBar: SnackBarService
  ) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.getCarpetDetails();
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  ngOnInit() {
    this.frmCarpetStock = this._formBuilder.group({
      quality: [''],
      design: [''],
      ground_colour: [''],
      border_colour: [''],
      carpet_no: [''],
      branch_code: [''],
      size: [''],
      area: [''],
    });
    // ['', 'design', '', '', '', '', 'size', ''];

    this.getProductQuality();
    this.getSizeInYaard();
    this.getCarpetDetails();
  }

  onDesign(data: any) {
    console.log(data);
    debugger;
    this._selectListService.getDesignByQtyId(data).subscribe((resp: any) => {
      console.log(resp.data);

      this.designList = resp.data;

      console.log('hhhhhh', this.designList);

      this.designID = this.designList[0].design;
    });
    if (this.designID != '') {
      this.onGroundBorder(this.designID);
    }
  }
  onGroundBorder(data: any) {
    debugger;
    this._selectListService.getGroundBorder(data).subscribe((resp: any) => {
      console.log(resp.data);
      this.groundColours = resp.data[0].ground;
      this.borderColours = resp.data[0].border;
      console.log(this.groundColours);
      console.log(this.borderColours);
    });
  }

  getProductQuality() {
    this._selectListService.getProductionQuality().subscribe((resp: any) => {
      console.log(resp.data);
      this.qualityList = resp.data;
    });
  }
  addCarpetStock() {
    const formData = this.frmCarpetStock.value;
    var data = {
      quality: formData.quality,
      design: formData.design,
      ground_colour: this.groundColours,
      border_colour: this.borderColours,
      carpet_no: formData.carpet_no,
      branch_code: formData.branch_code,
      size: formData.size,
      area: formData.area,
    };
    console.log(data);



    this._service.addCarpetStock(data).subscribe(
      (resp: any) => {
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
    this.getCarpetDetails();
  }

  getSizeInYaard() {
    this._selectListService.getSizeYaard().subscribe((resp: any) => {
      console.log(resp.data);
      this.sizeList = resp.data;
    });
  }

  changeSize(_id: any) {}


  getCarpetDetails() {
    ELEMENT_DATA.length = 0;
    this._service.getCarpetStock().subscribe((resp: any) => {
      debugger;
      console.log(resp);
      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,

            qty: val.quality,
            design: val.design,

            groundColour: val.ground_colour,
            borderColour: val.border_colour,
            carpetNo:val.carpet_no,
            branchCode:val.branch_code,
            size:val.size,
            area:val.area
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

}
