import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  index:number;
  id :string;
 quality:string;
 colourName:string;
 clolurCode:string;
 reciepeDetails:string;


 }

 const ELEMENT_DATA: PeriodicElement[] = [];


@Component({
  selector: 'app-colour-code-dyeing-detail',
  templateUrl: './colour-code-dyeing-detail.component.html',
  styleUrls: ['./colour-code-dyeing-detail.component.css']
})
export class ColourCodeDyeingDetailComponent {


  exportQuality = new FormControl('');

  exportQualityList: string[] = ['q1','q2'];

  public arrayColors: any = {

    color2: '#e920e9',

  };

  public color2: string = '';


  displayedColumns: string[] = ['id',  'quality', 'colourName','clolurCode','reciepeDetails'];


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
