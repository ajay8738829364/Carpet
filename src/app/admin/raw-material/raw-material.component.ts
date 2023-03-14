import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  materialName: string;
  count: string;
  desc: string;
  rate: string;
  hsnCode: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css'],
})
export class RawMaterialComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public frmRawMaterial!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}
  displayedColumns: string[] = [
    'id',
    'materialName',
    'count',
    'rate',
    'hsnCode',
    'desc',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  ngOnInit(): void {
    this.frmRawMaterial = this._formBuilder.group({
      materialName: [''],
      count: [''],
      hsnCode: [''],
      rate: [''],
      desc: [''],
    });
  }

  addRawMaterial() {
    const formData = this.frmRawMaterial.value;
    var data = {
      materialName: formData.materialName,
      count: formData.count,
      hsnCode: formData.hsnCode,
      rate: formData.rate,
      desc: formData.desc,
    };
    console.log(data);
  }
}
