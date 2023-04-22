import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';


export interface PeriodicElement {
  id:string;
index:number;
   buyerName:string;
   orderNo:string;
   orderDate:string;
   shippingDate:string;
   orderType:string;
   uom:string;
   issueUnit:string;
   priority:string;
   area:string;
   quality:string;
   design:string;
   ground:string;
   border:string;
   size:string;
   type:string;
   pcs:string;
   area2:string;
}

const ELEMENT_DATA: PeriodicElement[] = [];



@Component({
  selector: 'app-view-buyer-order-list',
  templateUrl: './view-buyer-order-list.component.html',
  styleUrls: ['./view-buyer-order-list.component.css']
})
export class ViewBuyerOrderListComponent {
  displayedColumns: string[] = ['id', 'buyerName', 'orderNo', 'orderDate','shippingDate','orderType','uom','issueUnit','priority','area','quality','design','ground','border','size','type','pcs'    , 'area2'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private _formBuilde: FormBuilder,
    private adminService: AdminMasterService,
    private _snackBar: SnackBarService
  ) {}
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
ngOnInit(): void {
  this.getAllBuyer();
}

  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  getAllBuyer() {
    ELEMENT_DATA.length = 0;

    this.adminService.getBuyerOrder().subscribe((res: any) => {
      console.log(res.data);
      if (res.data) {
        res.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val._id,
            buyerName:val.buyerName,
            orderNo:val.orderNo,
            orderDate:val.orderDate,
            shippingDate:val.shippingDate,
            orderType:val.orderType,
            uom:val.uom,
            issueUnit:val.issueUnit,
            priority:val.priority,
            area:val.area,
            quality:val.quality,
            design:val.design,
            ground:val.groundColour,
            border:val.borderColour,
            size:val.size,
            type:val.type,
            pcs:val.pcs,
            area2:val.totalArea
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit()
        return;
      }
    });
  }



}
