import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  id:number;
 design:string;
 other:string;
 resham:string;
 ground:string;
 border:string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];


@Component({
  selector: 'app-weaving',
  templateUrl: './weaving.component.html',
  styleUrls: ['./weaving.component.css']
})
export class WeavingComponent {

  design = new FormControl('');

  designList: string[] = ['desgin 1','desgin 2', 'design 3'];

  ground = new FormControl('');

  groundList: string[] = ['ground 1','ground 2', 'ground 3'];

  border= new FormControl('');

 borderList: string[] = ['border 1','border 2', 'border 3'];

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;

 displayedColumns: string[] = ['id','design','other','resham','ground','border']
 dataSource = new MatTableDataSource(ELEMENT_DATA);

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
 }
 applyFilter($event: any) {
   this.dataSource.filter = $event.target.value;
 }
}
