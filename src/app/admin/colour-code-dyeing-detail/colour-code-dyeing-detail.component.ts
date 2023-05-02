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

  colourName: string;
  clolurCode: string;
  reciepeDetails: string;

  materialName: string;
  count: string;
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
  arrData: any[] = [];
  count = new FormControl('');
  groupName?: string;
  countList: any[] = [];

  material_name = new FormControl('');

  materialList: any[] = [];

  colourList: any;

  isUpdate:boolean=false;


  constructor(
    private fb: FormBuilder,
    private _service: AdminMasterService,
    private _selectList: AllselectlistService,
    private _matSnack: SnackBarService
  ) {}

  productForm!: FormGroup;

  ngOnInit(): void {
    this.productForm = this.fb.group({
      // qty: [''],
      materialName: [''],
      count: [''],

      colourName: [''],
      colourCode: [''],
      recipe: [''],
      frmReciepeArray: this.fb.array([]),
    });
    this.qualityList();
    this.getMaterial();
    this.getColourCodeDyingDetails();
  }

  displayedColumns: string[] = [
    'id',
    'materialName',
    'count',
    'colourName',
    'clolurCode',
    'reciepeDetails',
    'action',
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
  // get frmReciepeArray() {
  //   return this.productForm.get("frmReciepeArray") as FormArray;
  // }

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
      materialName: formData.materialName,
      count: formData.count,
      colourName: formData.colourName,
      colourCode: this.color2,
      recipe: formData.recipe,
      data: formData.frmReciepeArray,
    };

    this._service.colourCodeDyingDetails(data).subscribe(
      (res: any) => {
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
      }
    );

    this.arrData = this.productForm.value;

    console.log(this.arrData);

    console.log(this.productForm.value);
  }

  qualityList() {
    this._selectList.getProductionQuality().subscribe((res: any) => {
      console.log(res.data);
      this.exportQualityList = res.data;
    });
  }

  getMaterial() {
    this._selectList.getAllMaterialItem().subscribe((res: any) => {
      console.log(res.data);
      this.materialList = res.data;
    });
  }
  onMaterial(data: any) {
    debugger;

    this._selectList.getCountList(data).subscribe((res: any) => {
      console.log(res);

      this.countList = res.data;
    });

    console.log('here my on change event  material ', data);
    this.material_name = data;
  }
  onCount(data: any) {
    debugger;
    this._selectList.getColourByCountId(data).subscribe((resp: any) => {
      console.log(resp.data);
      this.colourList = resp.data;
    });
    console.log(data);
    this.count = data;
  }

  getColourCodeDyingDetails() {
    this._service.getColourCodeDyingDetails().subscribe((resp: any) => {
      console.log(resp.data);
      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,

            colourName: val.colourName,
            clolurCode: val.colourCode,
            reciepeDetails: val.recipe,
            materialName: val.materialName,
            count: val.count,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

  getColourCodeById(_id: any) {
    this.isUpdate=true;
    console.log(_id);
    debugger;
    this._service.getColourCodeByID(_id).subscribe((resp: any) => {
      console.log(resp.data1);
      console.log(resp.data2);

      if (resp.data2 != null) {
        debugger
        for (let x = 0; x < resp.data2.length; x++) {

          this.addReceipeRow();
        }
      }
      this.productForm.patchValue({
        materialName:resp.data1[0].materialname,
        count: resp.data1[0].count,

        colourName:resp.data1[0].colourName,
        colourCode:resp.data1[0].colourCode,
        recipe: resp.data1[0].recipe,
        frmReciepeArray:resp.data2,
      });

    });
  }
}

