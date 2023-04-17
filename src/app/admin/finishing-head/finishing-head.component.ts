import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminMasterService } from 'src/app/services/admin-master.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

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
}
