import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { KotiService } from 'src/app/services/koti.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { global } from 'src/app/shared/global';

@Component({
  selector: 'app-koti-quality',
  templateUrl: './koti-quality.component.html',
  styleUrls: ['./koti-quality.component.css'],
})
export class KotiQualityComponent implements OnInit {
  frmKotiQuality!: FormGroup;

  design = new FormControl();

  designList: any;
  colour = new FormControl();
  colourList: any;

  size = new FormControl();
  sizeList: any;
  responsMessage: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: KotiService,
    private _matSnack: SnackBarService
  ) {}

  ngOnInit(): void {
    this.frmKotiQuality = this._formBuilder.group({
      design: ['', Validators.required],
      colour: ['', Validators.required],
      size: ['', Validators.required],
      design_code: ['', Validators.required],
      colour_code: ['', Validators.required],
    });
  }

  addKotiQuality() {
    const data = this.frmKotiQuality.value;
    console.log(data);

    this._service.addCodingDetail(data).subscribe((resp:any)=>{
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
}
