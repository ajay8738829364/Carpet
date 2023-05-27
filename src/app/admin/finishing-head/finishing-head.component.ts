import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';
// import html2canvas from 'html2canvas';
@Component({
  selector: 'app-finishing-head',
  templateUrl: './finishing-head.component.html',
  styleUrls: ['./finishing-head.component.css'],
})
export class FinishingHeadComponent implements OnInit {
  frmFinishingHead!: FormGroup;
  responsMessage: any;

  constructor(
    private _service: AdminMasterService,
    private _sanckBar: SnackBarService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {


    this.frmFinishingHead = this._formBuilder.group({

      jobName:['']

    });

  }

  onAddFinishingHead(){
    console.log(this.frmFinishingHead.value);


    const formData = this.frmFinishingHead.value.jobName;
    const dd =formData.charAt(0).toUpperCase() + formData.substring(1);
    console.log(dd);
    var data={
      jobName : formData.jobName
    }

    this._service.addFinishingHead(data).subscribe((resp: any) => {
      this.responsMessage = resp.message;
      this._sanckBar.openSnackBar(this.responsMessage, '');
    },
    (error) => {
      if (error.error.msg) {
        this.responsMessage = error.error.message;
      } else {
        this.responsMessage = global;
      }
      this._sanckBar.openSnackBar(this.responsMessage, global.error);
      console.log('data', data);
    })
  }


  ////////////////////////////////////////
  /////////////////////////
  ////////////////// here code for genrate invoice
  ////////////
  //////

  today = new Date();
  image = '../../assets/image/logo.svg';

  //today = new Date();
  // date = this.today.getDate();
  m_names = new Array(
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  );
  curr_date = this.today.getDate();
  curr_month = this.today.getMonth();
  curr_year = this.today.getFullYear();

  todays =
    this.m_names[this.curr_month] +
    ' ' +
    this.curr_date +
    ', ' +
    this.curr_year;
  newdat = this.todays;
  // image='../../assets/image/logo.svg';

  @ViewChild('htmlData') htmlData!: ElementRef;

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    // html2canvas(DATA).then((canvas) => {
    //   let fileWidth = 190;
    //   let fileHeight = (canvas.height * fileWidth) / canvas.width;
    //   const FILEURI = canvas.toDataURL('image/png');
    //   let PDF = new jsPDF('p', 'mm', 'a4');
    //   let position = 20;
    //   PDF.addImage(FILEURI, 'PNG', 10, position, fileWidth, fileHeight);
    //   PDF.save('pratyaksh.pdf');
    // });
  }
}
function html2canvas(DATA: any) {
  throw new Error('Function not implemented.');
}

