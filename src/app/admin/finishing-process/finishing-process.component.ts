import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
 index:number;
 id :string;
 job:string;
 quality:string;
 design:string;
 fromDate:string;
 toDate:string;
 rate:string;


}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-finishing-process',
  templateUrl: './finishing-process.component.html',
  styleUrls: ['./finishing-process.component.css']
})
export class FinishingProcessComponent {



  job = new  FormControl('')
  jobList:string[]=['job 1','job 2'];


  exportQuality = new FormControl('');

  exportQualityList: string[] = ['q1','q2'];

  design=new FormControl('');
  designList: string[]=['d1','d2'];


  displayedColumns: string[] = ['id', 'job', 'quality', 'design','fromDate','toDate','rate'];


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
