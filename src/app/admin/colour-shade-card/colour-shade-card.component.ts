import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  index:number;
  id :string;
  coourName:string;
  quality:string;
  design:string;
  colourNo:string;
  weight:string;
  lagat:string;


 }

 const ELEMENT_DATA: PeriodicElement[] = [];

type NewType = MatSort;

@Component({
  selector: 'app-colour-shade-card',
  templateUrl: './colour-shade-card.component.html',
  styleUrls: ['./colour-shade-card.component.css']
})
export class ColourShadeCardComponent {



  exportQuality = new FormControl('');

  exportQualityList: string[] = ['q1','q2'];
  design=new FormControl('');
  designList: string[]=['d1','d2'];



  displayedColumns: string[] = ['id', 'coourName', 'quality', 'design','colourNo','weight','lagat'];


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
}
