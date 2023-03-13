import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-byer',
  templateUrl: './byer.component.html',
  styleUrls: ['./byer.component.css']
})
export class ByerComponent {
  public frmByer!: FormGroup;
  open:boolean= true;
  hide = true;


  customerCodes = new FormControl('');

  customerCodeList: string[] = ['001','002'];


  orderType= new FormControl('');
  orderTypeList: string[] = ['001','002'];


finishingType=new FormControl('');
finishingTypeList: string[] = ['001','002'];


priority=new FormControl('');
priorityList: string[] = ['001','002'];
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.frmByer = this._formBuilder.group({


    });
  }


//   open1(){
// this.open=true;
//   }
//   open2(){
//     this.open=false;
//       }
  byer() {

    console.log(this.frmByer.value);

  }
}
