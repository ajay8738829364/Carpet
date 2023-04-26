import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/helper/helper.service';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

export interface PeriodicElement {
  id: string;
  index: number;
  item: string;
  count: string;
  colour: string;
  description: string;
  details: string;
  image: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-raw-material-group',
  templateUrl: './raw-material-group.component.html',
  styleUrls: ['./raw-material-group.component.css'],
})
export class RawMaterialGroupComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'item',
    'count',
    'colour',
    'description',
    'details',
    'image',
    'action',
  ];

  matImage!: File;
  materialId: any;
  isUpdate:boolean = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _formBuilder: FormBuilder,
    private adminService: AdminMasterService,
    private _snackBar: SnackBarService,
    private _helper: HelperService,
    private _activatedRoute: ActivatedRoute
  ) {}

  // 'item_name','description','count','colour','details','mat_image'
  responsMessage: any;

  public frmRawMaterialGroup!: FormGroup;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
    this.frmRawMaterialGroup = this._formBuilder.group({
      item_name: [''],
      description: [''],
      count: [''],
      colour: [''],
      details: [''],
      mat_image: [''],
    });

    // this.materialId = this._activatedRoute.snapshot.paramMap.get('id') || '';

    // if (this.materialId != '') {
    //   this.isUpdate=true;

    //   this.getMaterialData(this.materialId);
    // }

    this.getRawMaterial();

    this.adminService.citie().subscribe((res) => {
      console.log(res);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  selectImage(event: any) {
    this.matImage = event.target.files[0];
    console.log(this.matImage);
  }
  addRawMaterialGroup() {
    console.log(this.frmRawMaterialGroup.value);

    const formData = this.frmRawMaterialGroup.value;

    console.log(formData);
    var data = {
      item_name: formData.item_name,
      description: formData.description,
      count: formData.count,
      colour: formData.colour,
      details: formData.details,
    };
    debugger;

    this.adminService.rawMaterialGroup(data, this.matImage).subscribe(
      (resp) => {
        debugger;
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
      }
    );
  }

  getRawMaterial() {
    ELEMENT_DATA.length = 0;
    this.adminService.getRawMaterialGropu().subscribe((resp: any) => {
      debugger;
      console.log(resp);
      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,
            item: val.item_name,
            count: val.count,

            colour: val.colour,
            description: val.description,
            details: val.details,
            image:
              this._helper.apiPath.baseUrl + '/raw_material/' + val.mat_image,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

  getMaterialData(id: any) {
    this.isUpdate=true;
    this.materialId=id
    this.adminService.editRawMaterialGroup(id).subscribe((resp: any) => {
      if (resp.data) {


        this.frmRawMaterialGroup.patchValue(resp.data);

        console.log('here raw material data',resp.data);


      }
    });
  }

  updateRawMaterial(){
    console.log(this.frmRawMaterialGroup.value);

    const formData = this.frmRawMaterialGroup.value;

    console.log(formData);
    var data = {
      item_name: formData.item_name,
      description: formData.description,
      count: formData.count,
      colour: formData.colour,
      details: formData.details,
    };
    debugger;

    this.adminService.updateRawMaterial(this.materialId,data, this.matImage).subscribe(
      (resp:any) => {
        debugger;
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
      }
    );
  }
}
