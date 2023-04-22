import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { AllselectlistService } from 'src/app/services/allselectlist.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

export interface PeriodicElement {
  index: number;
  id: string;
  quality: string;
  colourName: string;
  clolurCode: string;
  reciepeDetails: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-colour-code-dyeing-detail',
  templateUrl: './colour-code-dyeing-detail.component.html',
  styleUrls: ['./colour-code-dyeing-detail.component.css'],
})
export class ColourCodeDyeingDetailComponent implements OnInit {
  exportQuality = new FormControl('');

  exportQualityList: string[] = [];

  public arrayColors: any = {
    color2: '#e920e9',
  };

  public color2: string = '';
  responsMessage: any;
  arrData:any[]=[];

  constructor(
    private fb: FormBuilder,
    private _service: AdminMasterService,
    private _selectList: AllselectlistService,
    private _matSnack: SnackBarService
  ) {}

  productForm!: FormGroup;

  ngOnInit(): void {
    this.productForm = this.fb.group({
      qty: [''],
      colourName: [''],
      colourCode: [''],
      recipe: [''],
      frmReciepeArray: this.fb.array([]),
    });
    this.qualityList();
  }

  displayedColumns: string[] = [
    'id',
    'quality',
    'colourName',
    'clolurCode',
    'reciepeDetails',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  /////////////////////////////////////////////
  ///////////////// add dynamic form control
  ///////
  onAddReceipe(): FormArray {
    return this.productForm.get('frmReciepeArray') as FormArray;
  }


  newReceipe(): FormGroup {
    return this.fb.group({
      chemicalName: '',
      chemicalWeight: '',
      chemicalVendorName: [''],
      dyisName: [''],
      dyisWeight: '',
      dyisVendorName: [''],
    });
  }

  addReceipeRow() {
    this.onAddReceipe().push(this.newReceipe());
  }


  removeReceipe(i: number) {
    this.onAddReceipe().removeAt(i);
  }

  onSubmit() {
    const formData = this.productForm.value;

    var data = {
      qty: 'ghh',
      colourName: formData.colourName,
      colourCode: this.color2,
      recipe: formData.recipe,
data:formData.frmReciepeArray
    };





    this._service.colourCodeDyingDetails(data).subscribe((res:any)=>{
      console.log(res.data);
      this.responsMessage = res.message;
      this._matSnack.openSnackBar(this.responsMessage, '');
    },
    (error) => {
      if (error.error.msg) {
        this.responsMessage = error.error.message;
      } else {
        this.responsMessage = global.genricError;
      }
      this._matSnack.openSnackBar(this.responsMessage, global.error);
      console.log('data', data);
    });

    this.arrData =this.productForm.value


    console.log(this.arrData);





    console.log(this.productForm.value);
  }

  qualityList() {
    this._selectList.getProductionQuality().subscribe((res: any) => {
      console.log(res.data);
      this.exportQualityList = res.data;
    });
  }
}
