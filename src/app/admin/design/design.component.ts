import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  productionQuality: string;
  exportQuality: string;
  ground: string;
  border: string;
  design: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
})
export class DesignComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  frmProductionQuality!: FormGroup;

  productionQualityList: any[] = [
    'productionQuality 1',
    'productionQuality 2',
  ];

  prodQty=new FormControl('');
  expQty= new FormControl('');

  exportQualityList:any[] = ['q1', 'q2'];

  displayedColumns: string[] = [
    'id',
    'productionQuality',
    'exportQuality',
    'ground',
    'border',
    'design',
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  responsMessage: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: AdminMasterService,
    private _serviceSelectList: AllselectlistService,
    private _matSnackBar: SnackBarService,
    private _httpClient: HttpClient
  ) {}
  // 'prodQty','expQty','design','ground','border
  ngOnInit(): void {
    this.frmProductionQuality = this._formBuilder.group({
      prodQty: [''],
      expQty: [''],
      design: [''],
      ground: [''],
      border: [''],
    });
    this.getProductQuality();
    this.getExportQuality();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  onSubmitDesign() {
    const formData = this.frmProductionQuality.value;
    console.log(formData);

    var data = {
      prodQty: formData.prodQty,
      expQty: formData.expQty,
      design: formData.design,
      ground: formData.ground,
      border: formData.border,
    };

    this._service.addDesign(data).subscribe((res:any)=>{
      this.responsMessage = res.message;
      this._matSnackBar.openSnackBar(this.responsMessage, '');
    },
    (error) => {
      if (error.error.msg) {
        this.responsMessage = error.error.message;
      } else {
        this.responsMessage = global.genricError;
      }
      this._matSnackBar.openSnackBar(this.responsMessage, global.error);
      console.log('data', data);
    });
  }

getProductQuality(){
this._serviceSelectList.getProductionQuality().subscribe((resp:any)=>{

  console.log(resp.data);
  this.productionQualityList=resp.data;

});
}
  onChangeProdQuality(event:any){
    this.prodQty=event;
  }

  getExportQuality(){
    this._serviceSelectList.getExportQuality().subscribe((resp:any)=>{

      console.log(resp.data);
      this.exportQualityList=resp.data;

    });
    }
      onChangeExpQuality(event:any){
        this.expQty=event;
      }
}
