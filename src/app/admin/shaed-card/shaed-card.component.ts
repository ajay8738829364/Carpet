import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  design: string;
  position: number;
color:string;

colorCode:string;
lagat:string;
colorShaed:string;
  quality: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{ position:1,design:'xxx',color:'Red',colorCode:'#fffff',colorShaed:'xyz',quality:'1 ',lagat:'2000'}
];


@Component({
  selector: 'app-shaed-card',
  templateUrl: './shaed-card.component.html',
  styleUrls: ['./shaed-card.component.css']
})
export class ShaedCardComponent implements OnInit {
  public arrayColors: any = {

    color2: '#e920e9',

  };

  public color2: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['position', 'quality','design','color', 'colorShaed','colorCode','lagat'];;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  quality = new  FormControl('');
  qualityList:string[]=['Q1','Q2'];
  design = new  FormControl('');
  designList:string[]=['D1','D2'];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  ngOnInit(){

  }
}
