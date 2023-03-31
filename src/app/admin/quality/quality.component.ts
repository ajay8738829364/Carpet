import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: string;
  index: number;
  exportQuality:string;
  quality:string;
  category:string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css']
})
export class QualityComponent {


  displayedColumns: string[] = ['id','quality','exportQuality','category'];




  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  group =new FormControl('');

 categoryList : string [] = ['category 1','category 1','category 1'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }


  onCategory(data:any){


  }

  frmQuality !:FormGroup;
     addQuality(){

     }
}
