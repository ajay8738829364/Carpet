import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  design: string;
  position: number;
color:string;
size:string;
colorCode:string;
lagat:string;
colorShaed:string;
  quality: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{ position:1,design:'xxx',color:'Red',colorCode:'#fffff',colorShaed:'xyz',size:'1 fit',quality:'1 ',lagat:'2000'}
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

  displayedColumns: string[] = ['position', 'quality','design', 'size','color', 'colorCode','colorShaed','lagat'];;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

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
