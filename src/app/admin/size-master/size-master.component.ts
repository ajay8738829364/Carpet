import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  id:number;
  sizeInFit:string;
  sizeInYard:string;
  sizeInMeter:string;

  khapSizeFit:string;
  khapSizeYard:string;
  khapSizeMeter:string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];
@Component({
  selector: 'app-size-master',
  templateUrl: './size-master.component.html',
  styleUrls: ['./size-master.component.css']
})
export class SizeMasterComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id','sizeInFit','khapSizeFit','sizeInYard','khapSizeYard','sizeInMeter','khapSizeMeter']
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
}
