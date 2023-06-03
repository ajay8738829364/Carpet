import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AllselectlistService } from 'src/app/services/allselectlist.service';
import { KotiService } from 'src/app/services/koti.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';
export interface PeriodicElement {
  index: number;
  id: string;
  espPrice: string;
  importerNumber: string;
  expenseAmount: string;
  totalMeter: string;

  file: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-koti-container-received',
  templateUrl: './koti-container-received.component.html',
  styleUrls: ['./koti-container-received.component.css'],
})
export class KotiContainerReceivedComponent implements OnInit {
  // importerNo = new FormControl();

  importerNoList: any;
  importerNoList2: any;
  frmContainerReceived!: FormGroup;

  isUpdate: boolean = false;
  file!: File;
  receivedId: any;
  responsMessage: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('matKotiImportSearch') matKotiImportSearch!: ElementRef;
  displayedColumns: string[] = [
    'id',
    'espPrice',
    'importerNumber',
    'expenseAmount',
    'totalMeter',
    'file',
    'action',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _service: KotiService,
    private _matSnack: SnackBarService,
    private _selectList: AllselectlistService
  ) {}
  ngOnInit(): void {
    this.frmContainerReceived = this._formBuilder.group({
      espPrice: [''],
      importerNumber: [''],
      expenseAmount: [''],
      totalMeter: [''],
      file: [''],
    });

    this.getContainerDetails();
    this.getImporterName();
  }

  onInputChange() {
    console.log(this.matKotiImportSearch.nativeElement.value);

    const searchInput = this.matKotiImportSearch.nativeElement.value
      ? this.matKotiImportSearch.nativeElement.value.toLowerCase()
      : '';

      this.importerNoList = this.importerNoList2.filter( (i:any) =>{
        const txt:string=i.importer_name.toLowerCase();
        return txt.indexOf(searchInput)>-1;


      })
  }
  selectImage(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  addContainerReceived() {
    console.log(this.frmContainerReceived.value);

    const data = this.frmContainerReceived.value;
    const formData = {
      espPrice: data.espPrice,
      importerNumber: data.importerNumber,
      expenseAmount: data.expenseAmount,
      totalMeter: data.totalMeter,
    };
    this._service.containerReceived(formData, this.file).subscribe(
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
        // console.log('data', data);
      }
    );
  }

  getImporterName() {
    this._selectList.getImporterName().subscribe((resp: any) => {
      console.log(resp.data);

      this.importerNoList = resp.data;
      this.importerNoList2 = resp.data;
    });
  }

  getContainerDetails() {
    debugger;
    this._service.getContainerReceived().subscribe((resp: any) => {
      console.log(resp.data);
      debugger;
      if (resp.data) {
        resp.data.map((val: any, ind: number) => {
          ELEMENT_DATA.push({
            index: ind + 1,
            id: val._id,
            espPrice: val.espPrice,
            importerNumber: val.importerNumber
              ? val.importerNumber.importer_name
              : '',
            expenseAmount: val.expenseAmount,
            totalMeter: val.totalMeter,
            file: 'http://localhost:4000/images/' + val.file,
          });
        });

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.ngAfterViewInit();
        return;
      }
    });
  }

  edit(id: any) {
    debugger;
    console.log(id);
    this.receivedId = id;
    this.isUpdate = true;
    this._service.getContainerReceivedById(id).subscribe((res: any) => {
      console.log(res.data);
      this.frmContainerReceived.patchValue(res.data[0]);
    });
  }
  delete(id: any) {
    this._service.deleteContainerReceived(id).subscribe(
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
  updateContainer() {
    console.log(this.frmContainerReceived.value);

    const data = this.frmContainerReceived.value;
    const formData = {
      espPrice: data.espPrice,
      importerNumber: data.importerNumber,
      expenseAmount: data.expenseAmount,
      totalMeter: data.totalMeter,
    };
    this._service
      .updateContainerReceived(formData, this.receivedId, this.file)
      .subscribe(
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
          // console.log('data', data);
        }
      );
  }
}
