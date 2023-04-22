import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

export interface PeriodicElement {
  id: string;
  index: number;
  exportQuality: string;
  quality: string;
  category: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css'],
})
export class QualityComponent implements OnInit {
  displayedColumns: string[] = ['id', 'quality', 'exportQuality', 'category','action'];
  responsMessage: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: SnackBarService,
    private _service: AdminMasterService,
    private _activatedRoute:ActivatedRoute
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  group = new FormControl('');

  categoryList: string[] = ['category 1', 'category 1', 'category 1'];



  isUpdate :boolean=false;
  qualityId:any;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  onCategory(data: any) {}

  ngOnInit(): void {
    this.frmQuality = this._formBuilder.group({
      exportQuality: [''],
      qualityName: [''],
      category: [''],
    });

    this.getQalityData();

    this.qualityId= this._activatedRoute.snapshot.paramMap.get('id')||"";
    if(this.qualityId!=''){
      this.isUpdate=true;
      this.editQualityData(this.qualityId);
    }


  }
  frmQuality!: FormGroup;
  addQuality() {
    const formData = this.frmQuality.value;
    var data = {
      exportQuality: formData.exportQuality,
      qualityName: formData.qualityName,
      category: formData.category,
    };

    this._service.quality(data).subscribe(
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
      }
    );
  }



  getQalityData(){
    this._service.getQuality().subscribe((resp:any)=>{

      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,
            exportQuality:val.exportQuality,
            quality:val.qualityName,
            category:val.category
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

  editQualityData(_id:any){
    this._service.getQualityById(_id).subscribe((resp:any)=>{
      console.log(resp.data);

      this.frmQuality.patchValue(resp.data);
    });
  }

  updateQualityData(){

    const formData = this.frmQuality.value;
    var data = {
      exportQuality: formData.exportQuality,
      qualityName: formData.qualityName,
      category: formData.category,
    };
    this._service.updateQuality(this.qualityId,data).subscribe((resp:any)=>{
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
      });
  }

}
