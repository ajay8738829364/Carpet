import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public frmRegister!: FormGroup;
  open:boolean= true;
  hide = true;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.frmRegister = this._formBuilder.group({
      name: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3)]],
      passward: ['',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]],
      mobile: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      image: [''],
      type: [''],
      address:['',[Validators.required]],
      gender:[''],
    });
  }


//   open1(){
// this.open=true;
//   }
//   open2(){
//     this.open=false;
//       }
  register() {

    console.log(this.frmRegister.value);

  }
}
