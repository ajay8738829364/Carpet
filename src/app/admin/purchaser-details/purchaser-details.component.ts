import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  selector: 'app-purchaser-details',
  templateUrl: './purchaser-details.component.html',
  styleUrls: ['./purchaser-details.component.css']
})
export class PurchaserDetailsComponent {
  displayedColumns: string[] = ['id','item','count','colour','description','details'];


 @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;


  responsMessage: any;
  public frmPurchaserDetails!:FormGroup;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  group =new FormControl('');

  groupList : string [] = ['group 1','group 1'];
  count=new FormControl('');

  countList: string[] = ['count 1', 'count 2'];

  material_name = new FormControl('');

  materialList: string[] = ['material 1', 'material 2'];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  onMaterial(data: any) {
    console.log(data);
    this.material_name = data;
  }
  onCount(data: any) {
    console.log(data);
    this.count = data;
  }

  onGroup(data:any){
    this.group=data;

  }
  addPurchaserDetails(){

  }
}
