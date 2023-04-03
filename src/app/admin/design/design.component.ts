import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: string;
  index: number;
  productionQuality:string;
  exportQuality:string;
  ground :string;
  border:string;
  design:string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  productionQuality=new FormControl('');

  productionQualityList : string[]=['productionQuality 1','productionQuality 2']


  exportQuality = new FormControl('');

  exportQualityList: string[] = ['q1','q2'];

  displayedColumns: string[] = ['id','productionQuality','exportQuality','ground','border','design'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
}
