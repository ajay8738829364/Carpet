import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  material: string;
  position: number;
  countTbl: string;
  shaedTbl: string;
  colorCode:string;
  shaedDetailTbl:string;
}

const ELEMENT_DATA: PeriodicElement[] = [

  { material:'0000', position:1,countTbl:'002',shaedTbl:'xxxx',shaedDetailTbl:'xyz',colorCode:  '#f6c7b6'}

];


@Component({
  selector: 'app-dying-master',
  templateUrl: './dying-master.component.html',
  styleUrls: ['./dying-master.component.css']
})


export class DyingMasterComponent implements  OnInit{

  public toggle: boolean = false;
public frmDyingMaster!:FormGroup;
  count = new FormControl('');

  countList: string[] = ['count 1','count 2'];


  shaed = new FormControl('');

  shaedList: string[] = ['count 1','count 2'];

constructor( private _formBuilder : FormBuilder){}

  public arrayColors: any = {

    color2: '#e920e9',

  };

  public color2: string = '';


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['position', 'material', 'shaedTbl', 'countTbl','shaedDetailTbl','colorCode'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }


  ngOnInit():void{
this.frmDyingMaster = this._formBuilder.group({
  material:[''],
  count:[''],
  shaed:[''],
  shaedDetail:[''],
  colorCode:this.arrayColors.color2.value
})
}
  addDyingMaster(){
console.log(this.frmDyingMaster.value);
  }
}
