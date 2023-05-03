import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupName,
} from '@angular/forms';
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
  colourShead: string;
  colourCode: string;
  weight: string;
  lagat: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-shaed-card',
  templateUrl: './shaed-card.component.html',
  styleUrls: ['./shaed-card.component.css'],
})
export class ShaedCardComponent implements OnInit {
  public arrayColors: any = {
    colour2: '#e920e9',
  };

  frmShadeCard!: FormGroup;

  public colour2: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'qty',
    'design',
    'groundColour',
    'borderColour',
    'colourShead',
    'colourCode',
    'weight',
    'lagat',
    'action',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  qualityList: any;

  designList: any;
  responsMessage: any;

  groundColours: any;
  borderColours: any;

  designID:any;

  isUpdate: boolean = false;
  shadeCardID: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: AdminMasterService,
    private _selectListService: AllselectlistService,
    private _snackBar: SnackBarService
  ) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  ngOnInit() {
    this.frmShadeCard = this._formBuilder.group({
      qty: [''],
      design: [''],
      groundColour: [''],
      borderColour: [''],
      colourShead: [''],
      colourCode:[''],
      weight: [''],
      lagat: [''],
    });

    this.getShadeCard();
    this.getProductQuality();
  }

  onDesign(data: any) {
    console.log(data);
debugger
    this._selectListService.getDesignByQtyId(data).subscribe((resp: any) => {
      console.log(resp.data);

      this.designList = resp.data;


      console.log('hhhhhh',this.designList);

      this.designID = this.designList[0].design;
      console.log(this.designID);
      if(this.designID!=''){
        this.onGroundBorder(this.designID);
       }
    });

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
  onAddShade() {
    debugger;
    const formData = this.frmShadeCard.value;
    debugger;
    var data = {
      qty:formData.qty,
      design:formData.design,
      groundColour:this.groundColours,
      borderColour:this.borderColours,
      colourShead:formData.colourShead,
      colourCode:this.colour2,
      weight:formData.weight,
      lagat:formData.lagat,
    };

    debugger;
    this._service.addShadeCard(data).subscribe(
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
    this.getShadeCard();
  }

  getShadeCard() {
    ELEMENT_DATA.length = 0;
    this._service.getShadeCardList().subscribe((resp: any) => {
      debugger;
      console.log(resp);
      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,

            qty: val.qualityName,
            design: val.design,

            groundColour: val.groundColour,
            borderColour: val.borderColour,
            colourShead: val.colourShead,
            colourCode: val.colourCode,
            weight: val.weight,
            lagat: val.lagat,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

  getProductQuality() {
    this._selectListService.getProductionQuality().subscribe((resp: any) => {
      console.log(resp.data);
      this.qualityList = resp.data;



    });
  }

  getShadeCardById(_id: any) {
    debugger
    this.isUpdate = true;
    this.shadeCardID = _id;
    this._service.getShadeCardWithId(_id).subscribe((resp: any) => {
      console.log(resp.data);

      this.onDesign(resp.data[0].qty)
debugger
       this.frmShadeCard.patchValue(  {qty:resp.data[0].qty,
        design:resp.data[0].design,
        groundColour:this.groundColours,
        borderColour:this.borderColours,
        colourShead:resp.data[0].colourShead,
        colourCode:resp.data[0].colourCode,
        weight:resp.data[0].weight,
        lagat:resp.data[0].lagat,});





    });
  }

  updateShadeCard() {
    const formData = this.frmShadeCard.value;
    debugger;
    var data = {
      qty: formData.qty,
      design: formData.design,
      groundColour: this.groundColours,
      borderColour: this.borderColours,
      colourShead: formData.colourShead,
      colourCode: this.colour2,
      weight: formData.weight,
      lagat: formData.lagat,
    };

    this._service.updateShadeCard(this.shadeCardID,data).subscribe((resp:any)=>{
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
    this.getShadeCard();
  }

  deleteShadeCard(_id:any){
    this._service.deleteShadeCard(_id).subscribe(
      (res: any) => {
        this.responsMessage = res.message;
        this._snackBar.openSnackBar(this.responsMessage, '');
      },
      (error) => {
        if (error.error.msg) {
          this.responsMessage = error.error.message;
        } else {
          this.responsMessage = global;
        }
        this._snackBar.openSnackBar(this.responsMessage, global.error);
      }
    );
  }
}

