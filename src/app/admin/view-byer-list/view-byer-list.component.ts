import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  edp: string;
  position: number;
  quality: number;
  design: string;
  ground: string;
  border: string;
  nqshaSize: string;
  pcs: string;
  orderDate: string;
  shipDate: string;
  byerCode: string;
  byerOrder: string;
  orderSize: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    edp: 'Hydrogen',
    quality: 1.0079,
    design: 'H',
    ground: 'aaa',
    border: 'xxxx',
    nqshaSize: '12.23',
    pcs: 'ccc',
    orderDate: '10/2/2012',
    shipDate: '10/10/2012',
    byerCode: '002',
    byerOrder: '006',
    orderSize: '1 fit',
  },
];
@Component({
  selector: 'app-view-byer-list',
  templateUrl: './view-byer-list.component.html',
  styleUrls: ['./view-byer-list.component.css'],
})
export class ViewByerListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'position',
    'edp',
    'quality',
    'design',
    'ground',
    'border',
    'nqshaSize',
    'pcs',
    'orderDate',
    'shipDate',
    'byerCode',
    'byerOrder',
    'orderSize',
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
}
