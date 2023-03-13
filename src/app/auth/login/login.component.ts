import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public frmLogin!: FormGroup;
  open:boolean= true;
  hide = true;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.frmLogin = this._formBuilder.group({

      passward: ['',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]],

      email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

    });
  }


//   open1(){
// this.open=true;
//   }
//   open2(){
//     this.open=false;
//       }
  login() {

    console.log(this.frmLogin.value);

  }
}
