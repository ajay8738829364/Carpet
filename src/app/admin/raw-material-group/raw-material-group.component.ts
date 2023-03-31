import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: string;
  index: number;
  item:string;
  count:string;
  colour:string;
  description:string;
  details:string;

}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-raw-material-group',
  templateUrl: './raw-material-group.component.html',
  styleUrls: ['./raw-material-group.component.css']
})
export class RawMaterialGroupComponent {

  displayedColumns: string[] = ['id','item','count','colour','description','details'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  responsMessage: any;
  public frmRawMaterialGroup!:FormGroup;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  addRawMaterialGroup(){

  }
}
