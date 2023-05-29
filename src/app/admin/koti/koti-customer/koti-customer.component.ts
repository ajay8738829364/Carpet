import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { KotiService } from 'src/app/services/koti.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';
export interface PeriodicElement {
  index: number;
  id: string;
  customer_name: string;
  branch_code: string;
  address: string;
  country: string;
  email: string;
  contact_no: string;
  customer_code: string;
  gst_no: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-koti-customer',
  templateUrl: './koti-customer.component.html',
  styleUrls: ['./koti-customer.component.css'],
})
export class KotiCustomerComponent implements OnInit {
  frmKotiCustomer!: FormGroup;
  responsMessage: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'customer_name',
    'branch_code',
    'address',
    'country',
    'email',
    'contact_no',
    'customer_code',
    'gst_no',
    'action',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  isUpdate: boolean = false;

  customerId: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _service: KotiService,
    private _matSnack: SnackBarService
  ) {}

  ngOnInit(): void {
    this.frmKotiCustomer = this._formBuilder.group({
      customer_name: ['', Validators.required],
      branch_code: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      contact_no: ['', Validators.required],
      customer_code: ['', Validators.required],
      gst_no: ['', Validators.required],
    });

    this.getCustomerDetails();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  addCustomer() {
    debugger;
    const data = this.frmKotiCustomer.value;
    console.log(data);

    this._service.addKotiCustomer(data).subscribe(
      (resp: any) => {
        this.responsMessage = resp.message;
        this._matSnack.openSnackBar(this.responsMessage, '');
      },
      (error) => {
        if (error.error.msg) {
          this.responsMessage = error.error.message;
        } else {
          this.responsMessage = global;
        }
        this._matSnack.openSnackBar(this.responsMessage, global.error);
        console.log('data', data);
      }
    );
  }

  getCustomerDetails() {
    this._service.getKotiCustomer().subscribe((resp: any) => {
      console.log('data', resp);

      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val.id,
            customer_name: val.customer_name,
            branch_code: val.branch_code,

            customer_code: val.customer_code,
            gst_no: val.gst_no,

            address: val.address,
            country: val.country,
            contact_no: val.contact_no,
            email: val.email,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

  edit(_id: any) {
    console.log(_id);
    debugger;
    this.isUpdate = true;

    this.customerId = _id;
    this._service.getCustomerById(_id).subscribe((resp: any) => {
      console.log(resp.data);
      debugger;
      this.frmKotiCustomer.patchValue({
        customer_name: resp.data[0].customer_name,
        branch_code: resp.data[0].branch_code,
        customer_code: resp.data[0].customer_code,
        gst_no: resp.data[0].gst_no,
        address: resp.data[0].address,
        country: resp.data[0].country,
        contact_no: resp.data[0].contact_no,
        email: resp.data[0].email,
      });
    });
  }

  updateCustomer() {
    debugger;
    const data = this.frmKotiCustomer.value;
    this._service.updateCustomer(data, this.customerId).subscribe(
      (resp: any) => {
        console.log(resp);
        this.responsMessage = resp.message;
        this._matSnack.openSnackBar(this.responsMessage, '');
      },
      (error) => {
        if (error.error.msg) {
          this.responsMessage = error.error.message;
        } else {
          this.responsMessage = global;
        }
        this._matSnack.openSnackBar(this.responsMessage, global.error);
        console.log('data', data);
      }
    );
  }


  deleteCustomer(_id: any) {
    this._service.deleteCustomer(_id).subscribe(
      (resp: any) => {
        console.log(resp.data);

        this.responsMessage = resp.message;
        this._matSnack.openSnackBar(this.responsMessage, '');
      },
      (error) => {
        if (error.error.msg) {
          this.responsMessage = error.error.message;
        } else {
          this.responsMessage = global;
        }
        this._matSnack.openSnackBar(this.responsMessage, global.error);
      }
    );
  }
}
